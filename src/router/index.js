import { lazy, Suspense } from "react";
import { HashRouter, Routes, Navigate, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { routes } from "router/Routes";
import { Loader } from "layout/Loader";
const PageNotFound = lazy(() => import("../pages/404"));

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
                    <HelmetProvider>
                      <Helmet>
                        <title>React Components | {title}</title>
                      </Helmet>
                      <PageComponent />
                    </HelmetProvider>
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
                            <HelmetProvider>
                              <Helmet>
                                <title>React Components | {childTitle}</title>
                              </Helmet>
                              <ChildComponent />
                            </HelmetProvider>
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
