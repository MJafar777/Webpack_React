import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import React , { Suspense } from "react";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
