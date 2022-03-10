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
        function Clear() {
            document.getElementById('txtFirst').value = "";
            document.getElementById('txtSecond').value = "";
            document.getElementById('txtResult').value = "";
        });
        }
    })
})