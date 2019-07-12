

$(document).ready(function(){

  var uperbar = $(".uperbar").innerHeight();
  var img = $(".carousel > div > img").innerHeight();

  $("header").innerHeight(uperbar+img);

  
 var windoo= $(window).innerWidth();
  $(".img-comp-img  img ").width(windoo);
  
  


  

 
  $(".ringhover1").hover(function(){
   
    $(this).addClass("ring-gridant");
    $(".hovertext1").css("opacity","1");
    $(".hoverline1").css("opacity","1");
    }, function(){
  
      $(this).removeClass("ring-gridant");
      $(".hovertext1").css("opacity","0.33");
    $(".hoverline1").css("opacity","0.33");
  });


  $(".ringhover2").hover(function(){
  
    $(this).addClass("ring-gridant");
    $(".hovertext2").css("opacity","1");
    $(".hoverline2").css("opacity","1");
    }, function(){

      $(this).removeClass("ring-gridant");
      $(".hovertext2").css("opacity","0.33");
      $(".hoverline2").css("opacity","0.33");
  });

  $(".ringhover3").hover(function(){
  
    $(this).addClass("ring-gridant");
    $(".hovertext3").css("opacity","1");
    $(".hoverline3").css("opacity","1");
    }, function(){
 
      $(this).removeClass("ring-gridant");
      $(".hovertext3").css("opacity","0.33");
      $(".hoverline3").css("opacity","0.33");
    
  });

  $(".ringhover4").hover(function(){
 
    $(this).addClass("ring-gridant");
    $(".hovertext4").css("opacity","1");
    $(".hoverline4").css("opacity","1");
    }, function(){

      $(this).removeClass("ring-gridant");
      $(".hovertext4").css("opacity","0.33");
      $(".hoverline4").css("opacity","0.33");
    
  });

if (1) {
  initComparisons();
}

 

  
  $(".img-comp-slider ").html("<img src='img/Header-03.png'>");
});

