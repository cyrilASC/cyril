console.log("Hello");
setTimeout(function(){console.log("Goodbye");}, 2000);
console.log("Hello again");
$.ajax({
    url: randomCountryURL,
    success: function(data){
        mySuccessFunc(data);
    }
});

function mySuccessFunc(data){
    var starterURL = "randomuser.com/api/?country=";
    var randomUserURL = starterUrl + data.countrycode;
    $.ajax({
        url: randomUserURL,
        success: /* */
    });
}