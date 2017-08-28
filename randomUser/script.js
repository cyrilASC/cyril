var apiURL = "https://randomuser.me/api";

$.ajax({
    url:apiURL,
    success:function(data){
        myFunction(data);
    }
});

function myFunction(data){
    var firstName = data.results[0].name.first;
    var lastName = data.results[0].name.last;
    $("body").append("<h2>"+firstName+" "+lastName+"</h2>");
}