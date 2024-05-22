import request from '@/utils/request';

// 示例：获取用户信息
export const getUserInfo = params => {
    return request({
        url: '/user/info',
        method: 'GET',
        params
    });
};
