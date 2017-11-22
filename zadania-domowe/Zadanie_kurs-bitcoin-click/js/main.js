$("#przycisk").click(function(){
    console.log("click click");
    $.getJSON("https://blockchain.info/pl/ticker"), function(data){
    console.log(data);
    console.log(data.buy);
    console.log(data.sell);
}});
//    var divKursSprzedazy = 
//    });


    