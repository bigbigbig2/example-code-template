//环境配置封装
const  env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    //开发环境
    development:{
        baseApi:'http://127.0.0.1:8000/api',
    },
    //测试环境
    test:{
        baseApi:'http://127.0.0.1:8000/api',
    },
    //生产环境
    production:{
        baseApi:'/',
    }
} 
export default {
    env,
    ...EnvConfig[env],//根据当前环境导出相应的mockApi、baseApi
    namespace:"researchManager"
}