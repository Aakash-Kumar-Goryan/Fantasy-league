$("form").on("submit", function(event){

    $.ajax({
        url:"http://192.168.0.102:8080/users",
        data:event.target,
        type:"POST"
    }).done(function(){
        console.log("success");
    }).fail(function(chr, status){
        console.log(status);
        alert("Try Again");
    })
});