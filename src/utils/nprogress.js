import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 创建一个用于封装 NProgress 调用的组件
const RouteChangeTracker = () => {
    const location = useLocation();
    NProgress.configure({
        easing: 'ease',  // 动画方式
        speed: 500,  // 递增进度条的速度
        showSpinner: false, // 是否显示加载ico
        trickleSpeed: 200, // 自动递增间隔
        minimum: 0.3 // 初始化时的最小百分比
    });
    useEffect(() => {
        NProgress.start();
        return () => {
            setTimeout(() => {
                NProgress.done();
            }, 50);
        };
    }, [location]);

    return null;
};

export default RouteChangeTracker;
