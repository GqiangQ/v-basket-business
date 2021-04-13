import Login from "../pages/sign/index";
import Home from "../pages/home";
import { lazy } from 'react'
const load = (name:string)=>lazy(()=>import(`../pages/${name}`))

const RouterConfig = [
  {
    path: "/login",
    component: load('sign'),
    auth: false,
    children:[
			{
      	path: '/in',
				component:load('sign/in')  
			},
			{
      	path: '/on',
				component:load('sign/on')  
			}
    ]
  },
  {
    path: "/home",
    component: lazy(()=>import('../pages/home')),
    auth: true
  },
];

export default RouterConfig;
