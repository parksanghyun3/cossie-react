import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { ListPage } from "./pages/ListPage";
import { EditPage } from "./pages/EditPage";
import { AdminPage } from "./pages/AdminPage";
import { ShowPage } from "./pages/ShowPage";

export const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/blogs",
    component: ListPage
  },
  {
    path: "/admin",
    component: AdminPage
  },
  {
    path: "/blogs/create",
    component: CreatePage
  },
  {
    path: "/blogs/:id/edit",
    component: EditPage,
  },
  {
    path: "/blogs/:id",
    component: ShowPage,
  },
]