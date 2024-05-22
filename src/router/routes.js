import { lazy } from 'react';

const routes = [
    {
        path: '/',
        component: lazy(() => import('@/pages/Home')),
        extract: true
    },
    {
        path: '/blog-list',
        component: lazy(() => import('@/pages/Blog')),
        children: [
            // {
            //     path: ':id',
            //     component: BlogDetail
            // }
        ]
    },
    // {
    //     path: '*',
    //     element: NotFound
    // }
    // 更多路由配置
    // {
    //   path: '/other',
    //   element: <OtherPage />
    // },
];

export default routes;
