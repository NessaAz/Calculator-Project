$(document).ready(function () {
	let value = "";
    $("span").on('click', function () {
        value += $(this).text();
        $(this).each(function (){
            display(value)
        })
        function display(value){
            $(".output").text(value)
        }
    })
})