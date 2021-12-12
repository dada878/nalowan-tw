init(0)

const vu = new Vue({
    el: '#app',
    data: {
        pageId: ["index","sponsor"],
        show:false
    },
    methods: {
        handleSelect: function(eve){
            page = this.pageId[Number(eve)]
            window.location.href=`${page}.html`
        }
    }
})

vu.$mount('#app')
vu.show = true