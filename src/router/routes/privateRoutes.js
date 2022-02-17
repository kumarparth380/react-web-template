// Export all the private routes

import Dashboard from "pages/private/dashboard";
import OrdersList from "pages/private/Orders";
import Settings from "pages/private/settings";

export const PrivateRoutes = [
  { path: "/u/dashboard", exact: true, component: Dashboard },
  { path: "/u/settings", exact: true, component: Settings },
  { path: "/u/orders", exact: true, component: OrdersList }
];
