import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { ListPage } from "./pages/ListPage";
import { EditPage } from "./pages/EditPage";

export const routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/blogs",
    component: CreatePage
  },
  {
    path: "/blogs/create",
    component: ListPage
  },
  {
    path: "/blogs/edit",
    component: EditPage
  },
]