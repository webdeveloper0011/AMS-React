
import Home from "./container/pages/Home";
import PrivacyPolicy from "./container/pages/PrivacyPolicy";
import Support from "./container/pages/Support";
import PageNotFound from "./container/pages/PageNotFound";
import Layout from "./Layout";
import AboutUs from "./container/pages/AboutUs";
import Counter from "./container/pages/learningPages/Counter";
import ToDos from "./container/pages/learningPages/ToDos";

const frontendRoutes = [
  {
    path: "/",
    element: <Layout  />,

    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: "about",
        children: [
          {
            path: "about-us",
            element: <AboutUs />
          }
        ]
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "support",
        element: <Support />
      },
      {
        path: "counter",
        element: <Counter/>
      },
      {
        path: "to-dos",
        element: <ToDos/>
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
];

export default frontendRoutes;