
init(2)

function send(nickName,content){
    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbxI3xxApAMGzI36F4HVGdrHiD2xDMJM5q_toPvxSM8a6U1PF94UKTTjZ5PIqCt_pZOfXw/exec",
        data: {'name' : nickName,'content' : content},
        dataType: "JSON",
        success: function (response) {
            alert('感謝您的訂購！！');
        }
    })
}

const vu = new Vue({
    el: '#app',
    data: {
        pageId: CONFIG_DATA.pages,
        show:false,
        inputNickname:"",
        inputText:"",
        radio:''
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