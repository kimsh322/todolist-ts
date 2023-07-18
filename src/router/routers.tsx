import { createRef } from "react";
import MainPage from "../pages/MainPage";
import TodayEndPage from "../pages/TodayEndPage";
import TodayListPage from "../pages/TodayListPage";
import HistoryPage from "../pages/HistoryPage";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const routes = [
  {
    path: "/",
    name: "TodoList",
    element: <MainPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/todaylist",
    name: "오늘 할 일",
    element: <TodayListPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/todayend",
    name: "정산하기",
    element: <TodayEndPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },

  {
    path: "/history",
    name: "History",
    element: <HistoryPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
