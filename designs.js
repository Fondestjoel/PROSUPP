//Select color input


    function makeGrid(){
      let height, width,color, canvas, canvasCell;
  
      height = $('#inputHeight').val();
      width = $('#inputWeight').val();
      canvas= $('#pixelCanvas');
  
      // to clear the table
      canvas.children().remove();
  
      //To dynamically add table row base on width
      for (let a =1; a <= height; a++) {
      canvas.append('<tr></tr>');
      }
          canvasCell=$('tr');
  
      //To dynamically add table column base on widths
      for(let b = 1; b <= width; b++){
          canvasCell.append('<td></td>');
      }
        assign=canvas.find('td');
  
      //to set the  the color picked
      assign.click(function(){
          color = $('#colorPicker').val();
          $(this).css('background-color',color);
      });
  
  }
  let submit;
  
  $(document).ready(function(){
      submit = $('input[type="submit"]');
      
      submit.click(function(event) {
           event.preventDefault();
           makeGrid();
      });
  
  });
  

