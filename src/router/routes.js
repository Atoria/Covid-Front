const DashboardLayout = () => import("@/layout/dashboard/DashboardLayout.vue")

// GeneralViews
const NotFound = () => import("@/pages/NotFoundPage.vue")

// Admin pages
const Statistics = () => import("@/pages/Statistics.vue")
const Cards = () => import("@/pages/Cards.vue")
const Authorization = () => import("@/pages/Authorization.vue");

const routes = [
  {
    path: "/authorization",
    name: "authorization",
    component: Authorization,
    beforeEnter: (to, from, next) => {
      console.log(111);
      next();//todo check on tokens
    }
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/statistics",
    children: [
      {
        path: "statistics",
        name: "statistics",
        component: Statistics,
        beforeEnter: (to, from, next) => {
          console.log(111);
          next();//todo check on tokens
        }
      },
      {
        path: "cards",
        name: "cards",
        component: Cards,
        beforeEnter: (to, from, next) => {
          next();//todo check on tokens
        }
      }
    ]
  },
  {path: "*", component: NotFound}
];


export default routes;
