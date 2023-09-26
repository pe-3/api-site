function Vue(options) {
    this._init(options)
}

function initMixin(Vue) {
    Vue.prototype._init = function() {
        const vm = this;
    }
}

new Vue({
    name: 'app',
    data() {
        return {}
    },
    breforeCreate() {
        console.log('创建前');
    },
    created() {
        console.log('创建了一个 vue 实例');
    },
    beforeMount() {
        console.log('挂载前');
    },
    mounted() {
        console.log('挂载了');
    }
})