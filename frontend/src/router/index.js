import { createWebHistory, createRouter } from "vue-router";
import Login from './../pages/Login';
import Register from './../pages/Register';
import Home from './../pages/Home';
import cscharp from '../pages/sischarp/biblioteka/cscharp';
import gameformsi from '../pages/sischarp/games/formgames/gameformsi';
import d2game from '../pages/sischarp/games/2d/2dgame';
import d3game from '../pages/sischarp/games/3d/d3game';
import basicofprogramming from "./../pages/basicofprogramming";
import classstructures from "./../pages/classstructures";
import delegate from "./../pages/delegate";
import dopioop from './../pages/dopioop';
import exceptionhandling from "./../pages/exceptionhandling";
import interfacee from './../pages/interface';
import objectorientedprogramming from './../pages/objectorientedprogramming';
import programmingigr from "./../pages/programmingigr";
import Admin from './../admin/Admin';
import Dashboard from './../admin/Dashboard';
import languages from './../pages/languages';
import siplusplus from './../pages/c++/biblioteka/siplusplus'
import javalanguages from './../pages/java/biblioteka/javalanguages'
import pythonlanguages from './../pages/python/biblioteka/pythonlanguage'
import error from './../pages/Error/404'
import games from './../pages/games'
import gameformjava from './../pages/java/games/formgames/gameformjava'
import myorder from "@/pages/myorder";
import gmpython from "./../pages/python/games/formgame/gmpython";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, 
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/myorder",
    name: "myorder",
    component: myorder,
  },
  {
    path: "/gmpython",
    name: "gmpython",
    component: gmpython,
  },
  {
    path: "/languages",
    name: "languages",
    component: languages,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/javalanguages",
    name: "javalanguages",
    component: javalanguages,
  },
  {
    path: "/cscharp",
    name: "cscharp",
    component: cscharp,
  },
  {
    path: "/games",
    name: "games",
    component: games,
  },
  {
    path: "/gameformjava",
    name: "gameformjava",
    component: gameformjava,
  },
  {
    path: "/siplusplus",
    name: "siplusplus",
    component: siplusplus,
  },
  {
    path: "/pythonlanguages",
    name: "pythonlanguages",
    component: pythonlanguages,
  },
  {
    path: "/gameformsi",
    name: "gameformsi",
    component: gameformsi,
  },
  {
    path: "/d2game",
    name: "2dgame",
    component: d2game,
  },
  {
    path: "/d3game",
    name: "d3game",
    component: d3game,
  },
  {
    path: "/basicofprogramming",
    name: "basicofprogramming",
    component: basicofprogramming,
  },
  {
    path: "/classstructures",
    name: "classstructures",
    component: classstructures,
  },
  {
    path: "/delegate",
    name: "delegate",
    component: delegate,
  },
  {
    path: "/dopioop",
    name: "dopioop",
    component: dopioop,
  },
  {
    path: "/exceptionhandling",
    name: "exceptionhandling",
    component: exceptionhandling,
  },
  {
    path: "/interfacee",
    name: "interfacee",
    component: interfacee,
  },
  {
    path: "/objectorientedprogramming",
    name: "objectorientedprogramming",
    component: objectorientedprogramming,
  },
  {
    path: "/programmingigr",
    name: "programmingigr",
    component: programmingigr,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: '/:pathMatch(.*)*',
    name: "error",
    component: error,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;