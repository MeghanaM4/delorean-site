import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import PCB from "./pages/hackpad/pcb.mdx";
import Parts from "./pages/hackpad/parts.mdx";
import Guide from "./pages/hackpad/guide.mdx";
import Setup from "./pages/hackpad/setup.mdx"
import CrashCourse from "./pages/hackpad/crashcourse.mdx"
import Submitting from "./pages/hackpad/submitting.mdx"
import FAQ from "./pages/hackpad/faq.mdx"
import Resources from "./pages/hackpad/resources.mdx"

import DocPage from "./layouts/DocPage.tsx";
import SideBarKeyboard from "./components/SideBarKeyboard.tsx";
import SideBar from "./components/SideBar.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";


// IMPORT YOUR PROJECTS HERE
import OrpheusPad from "./pages/submissions/Orpheuspad/OrpheusPad.mdx"
import CyaoPad from "./pages/submissions/Cyaopad/CyaoPad.mdx"
import Wang01 from "./pages/submissions/Wang01/Wang01.mdx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/pcb",
    element: (
      <DocPage Content = {PCB} SideBar = {SideBar} />
    ),
  },

  {
    path: "/parts",
    element: <DocPage Content = {Parts} SideBar = {SideBar} />,
  },

  {
    path: "/guide",
    element: <DocPage Content = {Guide} SideBar = {SideBar} />,
  },

  {
    path: "/setup",
    element: <DocPage Content = {Setup} SideBar = {SideBar} />,
  },

  {
    path: "/crashcourse",
    element: <DocPage Content = {CrashCourse} SideBar = {SideBar} />,
  },

  {
    path: "/submitting",
    element: <DocPage Content = {Submitting} SideBar = {SideBar} />,
  },

  {
    path: "/resources",
    element: <DocPage Content = {Resources} SideBar = {SideBar} />,
},

  {
    path: "/faq",
    element: <DocPage Content = {FAQ} SideBar = {SideBar} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
);
