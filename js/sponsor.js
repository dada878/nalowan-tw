init(1)

$(document).ready(function() {
  $('.sidebar').css('height', $('#primary').height());
});

$.get('https://script.google.com/macros/s/AKfycbxI3xxApAMGzI36F4HVGdrHiD2xDMJM5q_toPvxSM8a6U1PF94UKTTjZ5PIqCt_pZOfXw/exec', function(data) {
    console.log(data)
    vu.rankName = data.split("|")[0].split(",")
    vu.rankPrice = data.split("|")[1].split(",")
    console.log(vu.rankPrice)
    console.log(vu.rankName)
})

const vu = new Vue({
    el:"#app",
    data: {
        pageId: CONFIG_DATA.pages,
        show:false,
        rankPrice:["...","...","..."],
        rankName:["載入中...","載入中...","載入中..."],
    },
    methods: {
        handleSelect: function(eve){
            page = this.pageId[Number(eve)]
            window.location.href=`${page}.html`
        },
        sponsor: function() {
          this.$alert(`
        <div style="text-align: center;">
          <hr>
          <h3 style="font-weight: normal;color:black">台灣人贊助區</h3>
          <a target="_back" href="https://core.newebpay.com/EPG/naluwan/1RbACk"><button class="btn">使用藍新贊助</button></a>
          <hr>
          <h3 style="font-weight: normal;color:black">非台灣人贊助區</h3>
          <a target="_back" href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=afd48da076579&mfid=1639264641434_afd48da076579#/checkout/openButton"><button class="btn">使用PlayPay贊助</button></a>
          <hr>
          </div>
          
          `, '現在就贊助那魯灣', {
            dangerouslyUseHTMLString: true,
            
            // center: true
          });
        }
    }
})

vu.$mount('#app')
vu.show = true
