init(2)

const vu = new Vue({
    el: '#app',
    data: {
        pageId: CONFIG_DATA.pages,
        show:false
    },
    methods: {
        handleSelect: function(eve){
            page = this.pageId[Number(eve)]
            window.location.href=`http://localhost/index/html/${page}.html`
        }
    }
})

vu.$mount('#app')
vu.show = true