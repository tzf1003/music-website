import SystemInfo from "@/components/Main/SystemInfo.vue";
import UserRegist from "@/components/Main/UserRegist.vue";
import UserLoginVue from "@/components/Main/UserLogin.vue";
export default [
  {
    path: '/info',
    name: 'SystemInfo',
    components: {
      default: SystemInfo
    }
  },
  {
    path: '/register',
    name: 'UserRegist',
    components: {
      default: UserRegist
    }
  },
  {
    path: '/login',
    name: 'UserLogin',
    components: {
      default: UserLoginVue
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: (to, from, next) => {
      // 例如清除本地存储、清除状态等
      localStorage.removeItem('userInfo');
      localStorage.removeItem('authToken');
      // 重定向到登录页面
      next('/');
    }
  },

];

