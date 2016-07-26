$(document).ready(function() {
  var $scene = $(".scene"),
      $element = $(".element"),
      oldMousePositionX = 0,
      oldMousePositionY = 0,
      currentMousePositionX = 0,
      currentMousePositionY = 0,
      mouseMoveX,
      mouseMoveY,
      dataZ,
      dataX,
      dataY,
      start_x,
      start_y;

    start_x=-($element.width()-$scene.width())/6;
    start_y=-($element.height()-$scene.height())/6;
    $element.attr('data-x',start_x);
    $element.attr('data-y',start_y);
    
  $element.each(function() {
//    dataZ = $(this).attr("data-z"),
    dataX = $(this).attr("data-x"),
    dataY = $(this).attr("data-y");
    $(this).css({
//        "z-index": dataZ,
                "left": dataX + "px",
                "bottom": dataY + "px"});
  });
    
    console.log(dataX);
    console.log(dataY);
    console.log("###");
    
  $scene.on("mouseenter", function(event) {
    oldMousePositionX = event.offsetX;
    oldMousePositionY = event.offsetY;
  });
    
  $scene.on("mousemove", function(event) {
    currentMousePositionX = event.offsetX;
    currentMousePositionY = event.offsetY;
      console.log('mouse move');
      console.log(oldMousePositionX+' - '+currentMousePositionX);
    mouseMoveX = oldMousePositionX - currentMousePositionX;
    mouseMoveY = oldMousePositionY - currentMousePositionY;
 
      
//    if ($(event.target).hasClass("element")) {
//      currentMousePositionX += Number($(event.target).css("left"));
//      currentMousePositionY += Number($(event.target).css("bottom"));
//      mouseMoveX = oldMousePositionX - currentMousePositionX;
//      mouseMoveY = oldMousePositionY - currentMousePositionY;
//    }
      
      
    $element.each(function() {
        console.log(Number(dataX)+'+'+mouseMoveX+'*'+Number($(this).attr("data-speed")));
       var left_pos=(Number(dataX) + mouseMoveX * Number($(this).attr("data-speed")));
        
        var bottom_pos=(Number(dataY) + mouseMoveY * Number($(this).attr("data-speed")));
        
        console.log(left_pos);
        console.log(bottom_pos);
    
      console.log('---');
        
        if(left_pos<0){
            $(this).css({"left": left_pos + "px"});
        }
        if(bottom_pos<0 && bottom_pos>-80){
            $(this).css({"bottom": bottom_pos + "px"});
        }
       
    });
  });
    
});