const add = () => {
    // Get value inside input
    var text = $("input[type='text']").val();

    if(text.length === 0) {
        return null;
    } else {
        // Reset input on enter
        $("input[type='text']").val("");

        // Add li
        $("ul").append("<li><span><i class='fa fa-trash fa-1x'></i></span><p>" + text + "</p></li>");
    }
}

$("input[type='text']").keypress(function(event) {
    // If "enter" is pressed - KeyCode = 13
    if(event.which === 13) {
        add();
    }
});

$(".add").click(function() {
    add();
})


$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function() {
    $(this).parent().remove();
});
