//Task 1 and 2 Code
const button=document.getElementById("boxGenerate");
button.addEventListener("click",GenerateBox);




//Generation box
function GenerateBox()
{

//Generating Random Color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    box.style.backgroundColor=newColor;
   }
   var newColor = getRandomColor();
        var box = document.createElement('div');
   
        document.getElementById('box').appendChild(box);
        
        box.style.width="100px";
        box.style.height="100px";
        box.style.backgroundColor="red";
        box.style.margin="10px";
        box.style.cursor="pointer";
        box.onmouseenter=changeColor;
        box.onmouseleave=normalColor;
        //change background color to random color
        function changeColor(){
            box.style.backgroundColor=newColor;
        }
        //change to background color to red when cursor removed from box
        function normalColor(){
            box.style.backgroundColor="red";
        
        }   
     
  
}


//Task 3 and 4 Code
var names = ["Diego", "Gabriel", "Lucas"];
console.log(names[0])
//Geting  input field value
const getname=document.getElementById("addlist")
//Function to data data to list
function addList(){
    names.push(getname.value);
    //calling Display list in html
    RenderList();
    getname.value="";
    
}
 //Display list in html
function RenderList(){
    var ListData="";
    names.forEach(name=>{ ListData +="<li>"+ name+"</li>";})
    document.getElementById("list").innerHTML = ListData;
}
RenderList();




