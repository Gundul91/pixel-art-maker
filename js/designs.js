// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let color="#000";

document.querySelector("#colorPicker").onchange = function(){color=this.value};

document.querySelector("#btn_create").addEventListener("click",
function makeGrid() {
  const h=document.querySelector("#input_height").value;
  const w=document.querySelector("#input_width").value;
  const t=document.querySelector("#pixel_canvas");
  //take values when the creation buton is clicked
  let string="";
  var child=t.querySelectorAll("td").forEach(function(e){ console.log(e);e.remove();});
  //clear the table
  for(let r=0; r<h; r++)
  {
    string="<tr>";
    for(let c=0; c<w; c++)
    {
      string+="<td></td>";
    }
    string+="</tr>";
    t.insertAdjacentHTML('beforeend',string);
  }
  addEventListenerList(document.querySelectorAll("td"),"mousedown",function(event){
    switch(event.buttons){
      case 1:
        this.setAttribute("bgcolor",color);
        break;//color the first td clicked
      case 2:
        this.removeAttribute("bgcolor");
        break;//clear the first td clicked
      }
  });

  addEventListenerList(document.querySelectorAll("td"),"mouseover",function(event){
        switch(event.buttons){
        case 1:
          this.setAttribute("bgcolor",color);
          break;//color the td under the cursor
        case 2:
          this.removeAttribute("bgcolor");
          break;//clear the td under the cursor
        }
  });
});

function addEventListenerList(list,ev,foo)
{
  list.forEach(function(e){e.addEventListener(ev,foo)});
}
