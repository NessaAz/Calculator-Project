$(document).ready(function () {
    let value = "";
    $(".num-input").on('click', function () {
        value += $(this).text();
            $(this).each(function () {
                display(value)
                compute(value)
        })
        function display(value) {
                $(".output").text(value)
        }
    })

    $(".delete").on('click', function(){
            $(".output").text('')
            value = ""

    })
})


