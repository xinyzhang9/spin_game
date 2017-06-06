
var score = 0;
var countItems = $(".item").length,
    random , 
    getIconName , 
    getColor,
    deg = [];

for(var x = 0 ; x < countItems ; x++){
    $(".item ").eq(x).css("transform" , "rotate(" + x * 360 / countItems +"deg)");
}
for(var i = 360 ; i <= (360*9) ; i += 360){
  deg.push(i) ;
};

function randVal(num){
  return Math.floor(Math.random() * num );
}

$(".spin").on("click",function(){
  random = randVal(countItems);
  randDeg = deg[randVal(deg.length)] ;
  getColor = $('.item').eq(random).css("borderTopColor");
  getIconName = $('.item').eq(random).find("span").attr("data-name");


(random == 5 ) ?  randDeg += 60 :'';
(random == 4) ?  randDeg += 120 :'';
(random == 3 ) ?  randDeg += 180 :'';
(random == 2 ) ?  randDeg += 240 :'';
(random == 1 ) ?  randDeg += 300 :'';

  $(".inner").css({transform : "rotate(" + randDeg  + "deg)"});
  
  $(".title , body").css({backgroundColor: getColor , color: "#FFF" });
  $(".title h3").text(getIconName);
    score += parseInt(getIconName.length);
    $('#score').text(score);
    if(score >= 100){
        $('#ps').show().delay(3000).fadeOut();
    }
});