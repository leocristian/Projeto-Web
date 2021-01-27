function selectImage(event){
    const button = event.currentTarget
    
    //remove todos os active
    const buttons = document.querySelectorAll(".images button")
    
    buttons.forEach(removeActionClass)

    function removeActionClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem
    const image = button.children[0]
    const imageSelection = document.querySelector(".slide-inner > img")

    //atualizar o container imagem
    imageSelection.src = image.src

    //adicionar a classe .active a imagem
    button.classList.add("active")
}