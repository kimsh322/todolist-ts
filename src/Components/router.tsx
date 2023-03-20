import { createRef } from "react";
import MainPage from "../Pages/MainPage";
import TodayEnd from "../Pages/TodayEnd";
import TodayList from "../Pages/TodayList";
import History from "../Pages/History";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const routes = [
  {
    path: "/",
    name: "메인페이지",
    element: <MainPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/todaylist",
    name: "오늘 할 일",
    element: <TodayList />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/todayend",
    name: "오늘 정산",
    element: <TodayEnd />,
    nodeRef: createRef<HTMLDivElement>(),
  },

  {
    path: "/history",
    name: "지금까지 한것",
    element: <History />,
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
