import { lazy, Suspense } from "react";
import { HashRouter, Routes, Navigate, Route } from "react-router-dom";
import { routes } from "router/Routes";
import { Loader } from "layout/Loader";
const PageNotFound = lazy(() => import("../pages/404"));

export const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/accordian" />} />
          {routes.map(({ path, componentPath, children = [] }) => {
            if (children.length === 0) {
              const PageComponent = lazy(() =>
                import(
                  /* webpackChunkName: "[request]" */ `../${componentPath}`
                )
              );
              return (
                <Route key={path} path={path} element={<PageComponent />} />
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
                          element={<ChildComponent />}
                        />
                      );
                    }
                  )}
                </Route>
              );
            }
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
};
