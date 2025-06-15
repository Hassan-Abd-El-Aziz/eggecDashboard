import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/master/Home.vue";
import Customers from "../pages/Customers.vue";
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
