//该文档用于接口的统一管理

import requests from "@/api/request"

// 获取所有分数线
export const reqGetScoreLineBySid = (sid) => requests({
    url: `/scoreline/school/${sid}`,
    method: 'get'
})