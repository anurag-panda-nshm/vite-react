import { createBrowserRouter } from "react-router";
import Login from "./screens/login";
import HomeFeed from "./screens/home-feed";
import Profile from "./screens/profile";
import SDSAITutor from "./screens/sds-ai-tutor";
import AcademicResidential from "./screens/academic-residential";
import PostCreator from "./screens/post-creator";
import Community from "./screens/community";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/home",
    Component: HomeFeed,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/sds",
    Component: SDSAITutor,
  },
  {
    path: "/classroom",
    Component: AcademicResidential,
  },
  {
    path: "/post",
    Component: PostCreator,
  },
  {
    path: "/community",
    Component: Community,
  },
]);
