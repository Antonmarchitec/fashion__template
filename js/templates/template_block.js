let contBlocks = document.getElementById("contBlocks")
let template_block = document.getElementById("contBlocks__template").content
let blockFragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", ()=>{
    dataFech()
})


const dataFech = async () =>{
    try{
        let res = await fetch("blocks.json")
        let data = await res.json()
        //console.log(data)
        pintarTargets(data)

    }catch(error){
        console.log("Error al cargar el JSON")
    }
}


const pintarTargets = (data) =>{
    console.log(data)
    data.forEach(element => {
        console.log(element)
        template_block.querySelector("#contBlocks__title").textContent = element.name
        template_block.querySelector("#text").textContent = element.description
        template_block.querySelector("#image").setAttribute("src", element.image)
        template_block.querySelector("#image").setAttribute("alt", element.name)
        template_block.querySelector(".contBlocks__btn").dataset.idButton = element.id
        
        let cloneTarget = template_block.cloneNode(true)
        blockFragment.appendChild(cloneTarget)
    });
    contBlocks.appendChild(blockFragment)
}