import { createBrowserRouter } from "react-router-dom";

import App from "../App.tsx";
import TokensPage from "../pages/tokens/page.tsx";
import ActivityPage from "../pages/activity/page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/tokens",
        element: <TokensPage />,
      },

      {
        path: "/activity",
        element: <ActivityPage />,
      },
    ],
  },
]);
