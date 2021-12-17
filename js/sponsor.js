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
        rankPrice:["#","#","#"],
        rankName:["載入中...","載入中...","載入中..."],
        tableData: [{
            data1: '聊天樣式/稱號',
            data2: '無稱號',
            data3: '會員稱號',
            data4: '高級會員稱號',
            data5: '黃金會員稱號',
            data6: '鑽石會員稱號',
          },{
            data1: '需累積贊助金額',
            data2: '0',
            data3: '199',
            data4: '599',
            data5: '799',
            data6: '999',
          },{
            data1: '戰隊人數上限',
            data2: '5',
            data3: '6',
            data4: '8',
            data5: '8',
            data6: '12',
          },{
            data1: '使用場地選擇器',
            data2: '無法使用',
            data3: '無法使用',
            data4: '無法使用',
            data5: '可使用',
            data6: '可使用',
          },{
            data1: '可用箭矢特效數量',
            data2: '0',
            data3: '1',
            data4: '2',
            data5: '3',
            data6: '4',
          },{
            data1: '可用擊殺特效數量',
            data2: '0',
            data3: '0',
            data4: '0',
            data5: '1',
            data6: '3',
          },{
            data1: '優先體驗所有最新福利',
            data2: '無法',
            data3: '無法',
            data4: '無法',
            data5: '無法',
            data6: '可以',
          },{
            data1: '自訂義模式-創建上限',
            data2: '2',
            data3: '2',
            data4: '4',
            data5: '8',
            data6: '12',
          },{
            data1: '自訂義模式-方塊限制',
            data2: '可調整',
            data3: '可調整',
            data4: '可調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-消耗飽食度',
            data2: '可調整',
            data3: '可調整',
            data4: '可調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-勳章',
            data2: '無法調整',
            data3: '無法調整',
            data4: '無法調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-騎馬戰鬥模式',
            data2: '無法調整',
            data3: '無法調整',
            data4: '無法調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-開始前可否移動',
            data2: '無法調整',
            data3: '無法調整',
            data4: '無法調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-是否只能用弓箭',
            data2: '無法調整',
            data3: '無法調整',
            data4: '無法調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-無延遲戰鬥模式',
            data2: '無法調整',
            data3: '無法調整',
            data4: '無法調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-藥水效果設定',
            data2: '無法調整',
            data3: '無法調整',
            data4: '無法調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-血量顯示設定',
            data2: '無法調整',
            data3: '無法調整',
            data4: '無法調整',
            data5: '可調整',
            data6: '可調整',
          },{
            data1: '自訂義模式-彩色名稱',
            data2: '不可使用',
            data3: '不可使用',
            data4: '不可使用',
            data5: '可使用',
            data6: '可使用',
          }]
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
