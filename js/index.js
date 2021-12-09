console.log("owo")

$('#el').click(function() {
    $('#el').css('background-color', 'green');
});

const vu = new Vue({
    el: '#app',
    data: {
        visible: false,
    },
    methods: {
        handleSelect: function(eve){
            alert(eve)
        }
    }
})

vu.$mount('#app')
