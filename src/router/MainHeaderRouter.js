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
  }
];

