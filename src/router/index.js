import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/master/Home.vue";
import Customers from "../pages/Customers.vue";
import Suppliers from "../pages/Suppliers.vue";
import Charts from "../pages/Charts.vue";
import NotFound from "../pages/NotFound.vue";
const routes = [
  {
    name: "DashBoard",
    path: "/",
    component: HomePage,
  },
  {
    name: "Customers",
    path: "/customers",
    component: Customers,
  },
  {
    name: "Suppliers",
    path: "/suppliers",
    component: Suppliers,
  },
  {
    name: "Charts",
    path: "/charts",
    component: Charts,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
