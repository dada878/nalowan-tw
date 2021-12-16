
init(2)

function send(nickName,type,content){
    $.ajax({
        type: "POST",
        url: "https://script.google.com/macros/s/AKfycbxI3xxApAMGzI36F4HVGdrHiD2xDMJM5q_toPvxSM8a6U1PF94UKTTjZ5PIqCt_pZOfXw/exec",
        data: {'name' : nickName,'type':type,'content' : content},
        dataType: "JSON",
        success: function (response) {
            vu.inputText = null
            vu.radio = null
            vu.inputNickname = null
            vu.$message({
                message: '送出成功！感謝您的回報！',
                type: 'success'
            });
        }
    })
}

const vu = new Vue({
    el: '#app',
    data: {
        pageId: CONFIG_DATA.pages,
        show:false,
        inputNickname:'',
        inputText:'',
        radio:null
    },
    methods: {
        handleSelect: function(eve){
            page = this.pageId[Number(eve)]
            window.location.href=`${page}.html`
        },
        sendData: function() {
            if (this.inputText == '' || this.radio == null) {
                this.$message.error('回報內容與回報類型為必填欄位！');
            }
            else {
                send(this.inputNickname,this.radio,this.inputText)
                this.$message('資料傳送中...')
            }
        }
    }
})

vu.$mount('#app')
vu.show = true