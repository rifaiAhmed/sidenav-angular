import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink : 'dashboard',
        icon : 'fal fa-home',
        label : 'Dashboard'
    },
    {
        routeLink : 'products',
        icon : 'fal fa-box-open',
        label : 'Products',
        items: [
            {
                routeLink: 'products/level-satu',
                label: 'Level 1.1',
            },
            {
                routeLink: 'products/level-dua',
                label: 'Level 1.2',
            }
        ]
    },
    {
        routeLink : 'statistics',
        icon : 'fal fa-chart-bar',
        label : 'Statistics'
    },
    {
        routeLink : 'coupens',
        icon : 'fal fa-tags',
        label : 'Coupens',
        items : [
            {
                routeLink : 'coupens/list',
                label : 'List Coupens'
            },
            {
                routeLink : 'coupens/create',
                label : 'Create Coupens'
            }
        ]
    },
    {
        routeLink : 'pages',
        icon : 'fal fa-file',
        label : 'Pages'
    },
    {
        routeLink : 'media',
        icon : 'fal fa-camera',
        label : 'Media'
    },
    {
        routeLink : 'settings',
        icon : 'fal fa-cog',
        label : 'Settings'
    },
];