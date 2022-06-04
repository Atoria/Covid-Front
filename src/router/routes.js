const DashboardLayout = () => import("@/layout/dashboard/DashboardLayout.vue")
const Content = () => import("@/layout/dashboard/Content.vue")

// GeneralViews
const NotFound = () => import("@/pages/NotFoundPage.vue")

// Admin pages
const Statistics = () => import("@/pages/Statistics.vue")
const Cards = () => import("@/pages/Cards.vue")
const Login = () => import("@/pages/Login.vue");
const Register = () => import("@/pages/Register.vue");

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: Content,
    children: [
      {
        path: "login",
        name: "login",
        component: Login,
        beforeEnter: (to, from, next) => {
          next();//todo check on tokens
        }
      },
      {
        path: "register",
        name: "register",
        component: Register,
        beforeEnter: (to, from, next) => {
          next();//todo check on tokens
        }
      }
    ]
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    redirect: "/statistics",
    children: [
      {
        path: "statistics",
        name: "statistics",
        component: Statistics,
        beforeEnter: (to, from, next) => {
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
