
init(0)

const vu = new Vue({
    el: '#app',
    data: {
        pageId: CONFIG_DATA.pages,
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

// function scrollHandle() {
//     $el = document.getElementsByClassName("test")[0]
//    const offset = this.$el.getBoundingClientRect();
   
//    const offsetTop = offset.top;
//    const offsetBottom = offset.bottom;
//     if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
//         setTimeout(function (){
//             vu.showSp = true
//             console.log(vu.showSp)
//         }, 200);    
        
    
//    } else {
      

//    }
//  };

//  window.addEventListener("scroll", this.scrollHandle, true); // 监听 监听元素是否进入/移出可视区域