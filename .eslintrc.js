module.exports = {
    env: {
        node: true,
    },
    //继承原有的配置文件
    extends: [
        'plugin:vue/vue3-essential'
    ],
    // 在Vue 3.2及以上版本中，不需要显式导入defineProps，因为它是自动可用的。
    globals: {
        defineProps: 'readonly',
    },
};
