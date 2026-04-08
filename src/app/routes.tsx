import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "sobre-mi", Component: AboutPage },
      { path: "proyectos", Component: ProjectsPage },
      { path: "experiencia", Component: ExperiencePage },
      { path: "contacto", Component: ContactPage },
    ],
  },
]);