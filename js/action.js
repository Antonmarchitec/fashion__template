//let action = document.querySelector("#action")
let ul_action = document.querySelector("#ul_action")
let active = false

/*
action.addEventListener("mouseover", ()=>{
  ul_action.classList.add("ul_actionJS")
})

*/

document.getElementById("action").addEventListener("mouseover", () =>{
  ul_action.classList.add("ul_actionJS")
})

document.getElementById("action").addEventListener("mouseout", () =>{
  ul_action.classList.remove("ul_actionJS")
})



/*
<h1 id="demo">Mouse over me</h1>

<script>
document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}
</script>
*/
