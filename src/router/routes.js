import router from "./index";
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
    beforeEnter: (to, from, next) => {
      if(sessionStorage.getItem('token')){
        router.push({name: 'statistics'})
      }else{
        next();
      }
    },
    children: [
      {
        path: "login",
        name: "login",
        component: Login,

      },
      {
        path: "register",
        name: "register",
        component: Register,

      }
    ]
  },
  {
    path: "/dashboard",
    component: DashboardLayout,
    redirect: "/statistics",
    beforeEnter: (to, from, next) => {
      if(!sessionStorage.getItem('token')){
        router.push({name: 'login'})
      }else{
        next();
      }
    },
    children: [
      {
        path: "statistics",
        name: "statistics",
        component: Statistics,
      },
      {
        path: "cards",
        name: "cards",
        component: Cards,
      }
    ]
  },
  {path: "*", component: NotFound}
];


export default routes;
