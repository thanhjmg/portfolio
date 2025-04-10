import { LoginLayout } from '../layout';

import Home from '../pages/Home';
import About from '../pages/Home/About/about';
import Skill from '../pages/Home/Skill/skill';
import Contact from '../pages/Home/Contact/contact';
import Project from '../pages/Home/Project/project';
import routeConfig from '../configRoutes';
//public
const publicRoutes = [
    {
        path: routeConfig.routeConfig.home,
        component: Home,
    },
    {
        path: routeConfig.routeConfig.about,
        component: Home,
    },
    {
        path: routeConfig.routeConfig.skill,
        component: Home,
    },
    {
        path: routeConfig.routeConfig.contact,
        component: Home,
    },
    {
        path: routeConfig.routeConfig.project,
        component: Home,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
