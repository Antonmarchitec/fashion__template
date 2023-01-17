let btnMenu = document.querySelector("#btnMenu")
let menu = document.querySelector("#menu")


btnMenu.addEventListener("click", () =>{
    menu.classList.toggle("menu_JS")
})




const subMenuBtn = document.querySelectorAll(".submenu-btn")
for (let i = 0 ; i < subMenuBtn.length; i++ ){
    subMenuBtn[i].addEventListener("click", ()=>{
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling
            const height = subMenu.scrollHeight

            if(subMenu.classList.constains("desplegar")){
                subMenu.classList.remove("desplegar")
                subMenu.removeAttribute("style")
            }else{
                subMenu.classList.add("desplegar")
                subMenu.style.height = height + "px"
            }
        }
    })
}

