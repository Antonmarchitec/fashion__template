//let action = document.querySelector("#action")


let contHeader__ul = document.querySelector("#contHeader__ul")
let contHeader__btn = document.querySelector("#contHeader__btn")

contHeader__btn.addEventListener("click", ()=>{
  contHeader__ul.classList.toggle("contHeader__ul_js")
})




/*
let active = false

/*
action.addEventListener("mouseover", ()=>{
  ul_action.classList.add("ul_actionJS")
})

*/
/*
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
