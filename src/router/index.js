import { Fragment, lazy, Suspense, useEffect } from "react";
import { HashRouter, Routes, Navigate, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { routes } from "router/Routes";
import { Loader } from "layout/Loader";
const PageNotFound = lazy(() => import("../pages/404"));

const Wrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = `React Components | ${title}`;
  }, [title]);

  return <Fragment>{children}</Fragment>;
};

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
};

export const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <Routes>
          {routes.map(({ path, componentPath, children = [], title }) => {
            if (children.length === 0) {
              const PageComponent = lazy(() =>
                import(
                  /* webpackChunkName: "[request]" */ `../${componentPath}`
                )
              );
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Wrapper title={title}>
                      <PageComponent />
                    </Wrapper>
                  }
                />
              );
            } else {
              const LayoutComponent = lazy(() =>
                import(
                  /* webpackChunkName: "[request]" */ `../${componentPath}`
                )
              );
              return (
                <Route key={path} path={path} element={<LayoutComponent />}>
                  {children.map(
                    ({
                      path: childPath,
                      componentPath: childComponentPath,
                      title: childTitle,
                    }) => {
                      const ChildComponent = lazy(() =>
                        import(
                          /* webpackChunkName: "[request]" */ `../${childComponentPath}`
                        )
                      );
                      return (
                        <Route
                          key={childPath}
                          path={childPath}
                          element={
                            <Wrapper title={childTitle}>
                              <ChildComponent />
                            </Wrapper>
                          }
                        />
                      );
                    }
                  )}
                </Route>
              );
            }
          })}
          <Route
            path="/"
            element={<Navigate replace to="/react-components/accordian" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
};
