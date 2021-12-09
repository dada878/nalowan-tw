

function cool() {
    alert("cool")
}
new Vue({
    el:"#app",
    data: {
        message:"Hello World",
        html:"<img src=../assets/imgs/img1.png>",
        ok:false,
        see: false,
        items:[
            "owo",
            "awa",
            "lol",
            "qwq"
        ]
    },
    methods: {
        fun: function() {
            return "Coool"
        },
        cool() {
            alert("cool")
        }
    }
})
