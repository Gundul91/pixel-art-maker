// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let color="#000";

$("#colorPicker").change(function (){color=$(this).val();});

$("#btn_create").click(
function makeGrid() {
  const h=$("#input_height").val();
  const w=$("#input_width").val();
  const t=$("#pixel_canvas");
  let string="";
  t.children().remove();
  for(let r=0; r<h; r++)
  {
    string="<tr>";
    for(let c=0; c<w; c++)
    {
      string+="<td></td>";
    }
    string+="</tr>";
    t.append(string);
  }
  $("td").mousedown(function(event){
    switch(event.buttons){
      case 1:
        $(this).attr("bgcolor",color);
        break;//color the first td clicked
      case 2:
        $(this).removeAttr("bgcolor");
        break;//clear the first td clicked
      }
  });

  $("td").mouseover(function(event){
        switch(event.buttons){
        case 1:
          $(this).attr("bgcolor",color);
          break;//color the td under the cursor
        case 2:
          $(this).removeAttr("bgcolor");
          break;//clear the td under the cursor
        }
  });
});
