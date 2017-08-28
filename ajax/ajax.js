// ID: 52cf957f
//KEY: 71f06ea7a7672686f8400b9b687f44dc

var MY_ID = "52cf957f";
var  MY_KEY = "71f06ea7a7672686f8400b9b687f44dc";

var bigMacURL = "https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,brand_name,item_id,nf_calories&appId="+MY_ID+"&appKey="+MY_KEY;

$.ajax({
    url:bigMacURL,
    success:function(data){
        //console.log(data);
        var food = data.hits[1];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This "+name+" has "+cals+" cals!</h2>");
    }
});