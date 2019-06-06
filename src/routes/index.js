import Details from "../components/Details/Details";
import List from "../components/List/List";

export const routes = [
    {
        path: '/list',
        component: List,
    },
    {
        path: '/detail/:category',
        component: Details,
    }
];
