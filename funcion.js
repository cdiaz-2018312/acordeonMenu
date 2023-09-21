let listas = document.querySelectorAll(".link")

listas.forEach(listaa=>{
    listaa.addEventListener("click",()=>{
        if (listaa.classList.contains("active")){
            listaa.classList.remove("active");
        }else{
            listas.forEach(List=>{
                List.classList.remove("active")
            })
            listaa.classList.toggle("active")
        }
    })
})