
$(function(){

    $("#getUsers").on('click', function (res) {
        $.get("http://jsonplaceholder.typicode.com/users").done(processData);

    });


    $(".user").on("click","tr", function (res) {
        var id = $(this).data("id");
        $.get("http://jsonplaceholder.typicode.com/posts/" + id).done(function (data) {
            $(".post tbody").append("<tr data-id="+data.id+">" +
                "<td>"+data.id+"</td>"+
                "<td>"+data.title+"</td>" +
                "<td>"+data.body+"</td>" +
                "</tr>");
        });
        $(".post").show();
        $(".post").scrollView();
    });

    $(".post").on("click", "tr", function () {
        var id = $(this).data("id");
        $.get("http://jsonplaceholder.typicode.com/comments/" + id).done(function (data) {
            $(".comment tbody").append("<tr>" +
                "<td>"+data.id+"</td>"+
                "<td>"+data.name+"</td>" +
                "<td>"+data.email+"</td>" +
                "<td>"+data.body+"</td>" +
                "</tr>");
        });
        $(".comment").show();
        $(".comment").scrollView();
    });

});

function processData(data){

   $.each(data, function (key, value) {

       $(".user tbody").append("<tr data-id="+value.id+">" +
           "<td>"+value.name+"</td>" +
           "<td>"+value.email+"</td>" +
           "<td>"+value.address.street+", "+value.address.city+"</td>" +
           "</tr>");


   });

   $(".table").show();
}


$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}