function selectImage(event){
    const button = event.currentTarget
    console.log(button.children)
    //remove todos os active
    const buttons = document.querySelectorAll(".images a")
    

    buttons.forEach(removeActionClass)

    function removeActionClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem
    const image = button.children[0]
    const imageTXT = button.children[1]
    const imageTXTinfo = button.children[2]

    const imageSelection = document.querySelector(".slide-inner > img")
    const imageTXTSelection = document.querySelector(".slide-inner > h1")
    const imageTXTinfoSelection = document.querySelector(".slide-inner > p")


    //atualizar o container imagem
    imageSelection.src = image.src
    imageTXTSelection.textContent = imageTXT.textContent
    imageTXTinfoSelection.textContent = imageTXTinfo.textContent

    //adicionar a classe .active a imagem
    button.classList.add("active")
}
