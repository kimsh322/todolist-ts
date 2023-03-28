import { createRef } from "react";
import MainPage from "./MainPage";
import TodayEnd from "./TodayEnd";
import TodayList from "./TodayList";
import History from "./History";
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
    element: <TodayList />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: "/todayend",
    name: "정산하기",
    element: <TodayEnd />,
    nodeRef: createRef<HTMLDivElement>(),
  },

  {
    path: "/history",
    name: "History",
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
