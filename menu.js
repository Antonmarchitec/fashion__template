let btnMenu = document.querySelector("#btnMenu")
let menu = document.querySelector("#menu")


btnMenu.addEventListener("click", () =>{
    menu.classList.toggle("menu_JS")
})


const submenuBtn = document.querySelectorAll(".submenu-btn")
for(let i = 0; i < submenuBtn.length; i++){
    submenuBtn[0].addEventListener("click", ()=>{
        if(window.innerWidth < 1024){
            const submenu = this.nextElementSibling
            const height = submenu.scrollHeight

            if(submenu.classList.contains("desplegar")){
                submenu.classList.remove("desplegar")
                submenu.removeAttribute("style")
            }else{
                submenu.classList.add("desplegar")
                submenu.style.height = height + "px"
            }
        }
    })
}






/*
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
*/
