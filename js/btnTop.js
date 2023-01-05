let btnTop = document.querySelector("#btnTop")

document.addEventListener("scroll", ()=>{
    let posicionBtnTop = btnTop.offsetTop
    console.log(posicionBtnTop)

    let posicionScrolling = document.documentElement.scrollTop;
    console.log(posicionScrolling)

    if(posicionScrolling > posicionBtnTop){
        btnTop.classList.add("btnTop_JS")
    }else{
        btnTop.classList.remove("btnTop_JS")
    }
})