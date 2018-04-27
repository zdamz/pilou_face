var audio = new Audio('son/coinDrop.mp3');
var audio2 = new Audio('son/clong.mp3');
//var joueur1="";
var joueur2 = "";

$("#jouer").click(function () {
    $("#flip").attr("src", "img/flip.gif");
    audio.play();
    $("#jouer").hide();
    setTimeout(function () {
        audio2.play();
        piece = Math.floor(Math.random() * 2);
        switch (piece) {
            case 0:
                $("#flip").attr("src", "img/pile.jpg");
                var joueur1 = $("#j1").val();
                M.toast({
                    html: joueur1 + " , tu gagnes!"
                });
                $("#j1").val('');
                $("#j2").val('');
                break;
            case 1:
                $("#flip").attr("src", "img/face.JPG");
                var joueur1 = $("#j2").val();
                M.toast({
                    html: joueur1 + " , tu gagnes!"
                });

                break;
        }
        $("#rejouer").show();
    }, 3000);
});
$("#rejouer").click(function () {
    $("#flip").attr("src", "img/coin.png");
    $("#rejouer").hide();
    $("#jouer").show();
    console.log(piece);
    // $("#face").src();
});
//$( "#jouer" ).click (function()
// $( "#jouer" ).click (function() {
//     piece= Math.floor(Math.random() * Math.floor(2));
//     switch (piece) { 
//       case 0: 
//       $("#flip").attr("src","img/pile.jpg");
//           break;
//       case 1: 
//       $("#flip").attr("src","img/face.JPG");
//           break;}
//        $("#jouer").hide();
//        $("#rejouer").show();     

//   });
//   $( "#rejouer" ).click (function() {
//       $("#flip").attr("src","img/flip.gif");
//       $("#rejouer").hide();
//       $("#jouer").show();
//       console.log(piece);
//