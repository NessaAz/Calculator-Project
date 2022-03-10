$(document).ready(function () {
    $("span").on('click', function () {
        let value = $(this).text();
        $(this).each(function (){
            display(value)
        })
        function display(value){
            $(".output").text(value)
        }
    })
})
