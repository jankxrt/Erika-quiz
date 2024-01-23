function runAway() {
  
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var top = Math.random() * h;
    var left = Math.random() * w;
    
    $('.shy').animate({ top: top, left: left });
}