$(document).ready(function() {
  var $scene = $(".scene"),
      $element = $(".element"),
      oldMousePositionX = 0,
      oldMousePositionY = 0,
      currentMousePositionX = 0,
      currentMousePositionY = 0,
      mouseMoveX,
      mouseMoveY,
      dataX,
      dataY,
      start_x,
      start_y;

    start_x=-($element.width()-$scene.width())/6;
    start_y=-($element.height()-$scene.height())/6;
    $element.attr('data-x',start_x);
    $element.attr('data-y',start_y);
    
    $element.each(function() {
        dataX = $(this).attr("data-x"),
        dataY = $(this).attr("data-y");
        $(this).css({"left": dataX + "px", "bottom": dataY + "px"});
    });
    
    $scene.on("mouseenter", function(event) {
        oldMousePositionX = event.offsetX;
        oldMousePositionY = event.offsetY;
    });

    $scene.on("mousemove", function(event) {
        currentMousePositionX = event.offsetX;
        currentMousePositionY = event.offsetY;
        mouseMoveX = oldMousePositionX - currentMousePositionX;
        mouseMoveY = oldMousePositionY - currentMousePositionY;


        $element.each(function() {
            var left_pos=(Number(dataX) + mouseMoveX * Number($(this).attr("data-speed")));
            var bottom_pos=(Number(dataY) + mouseMoveY * Number($(this).attr("data-speed")));
            if(left_pos<0){
                $(this).css({"left": left_pos + "px"});
            }
            if(bottom_pos<0 && bottom_pos>-80){
                $(this).css({"bottom": bottom_pos + "px"});
            }
        });
    });
    
});