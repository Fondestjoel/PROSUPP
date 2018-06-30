let height,
  width,
  color;

  $("#sizePicker").submit(function(event){
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);

//console.log("height:"+ height + "and width:" + width);
  });
  
  
  function makeGrid(height, width) {
    $("tr").remove();
  
    for (let i = 1; i <= height; i++) {
      $("pixelCanvas").append("<tr id=table${i}</tr>");
      for (let j = 1; i <= width; j++) {
        $("table${i}").append("<td></td>");
      }
    }
  
    // It's time to add color.
    $("td").click(function addColor() {
      color = $('#colorPicker').val();

      if($(this).attr("style")){
        $(this).removeAttr("style");
      }else {
        $(this).attr("style", "background-color:${color}");

      }
  
      
    });
  }
  
