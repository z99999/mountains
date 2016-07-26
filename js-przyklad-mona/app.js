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
      dataY;

  $element.each(function() {
    dataZ = $(this).attr("data-z"),
    dataX = $(this).attr("data-x"),
    dataY = $(this).attr("data-y");
    $(this).css({"z-index": dataZ,
                "left": dataX + "px",
                "top": dataY + "px"});
  });
  $scene.on("mouseenter", function(event) {
    oldMousePositionX = event.offsetX;
    oldMousePositionY = event.offsetY;
  });
  $scene.on("mousemove", function(event) {
    currentMousePositionX = event.offsetX,
    currentMousePositionY = event.offsetY,
    mouseMoveX = oldMousePositionX - currentMousePositionX,
    mouseMoveY = oldMousePositionY - currentMousePositionY;

    if ($(event.target).hasClass("element")) {
      currentMousePositionX += Number($(event.target).css("left"));
      currentMousePositionY += Number($(event.target).css("top"));
      mouseMoveX = oldMousePositionX - currentMousePositionX;
      mouseMoveY = oldMousePositionY - currentMousePositionY;
    }
    $element.each(function() {
      $(this).css({
        "left": ((Number(dataX) + mouseMoveX) * Number($(this).attr("data-speed"))) + "px",
        "top": ((Number(dataY) + mouseMoveY) * Number($(this).attr("data-speed"))) + "px"});
    });
  });
});