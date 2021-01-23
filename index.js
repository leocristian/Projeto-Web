function setCookie(valor){
	var data = new Date();
	//Configurando tempo de vida do cookie
	data.setTime(data.getTime() + 60000);
	//Criando a estrutura do cookie
	document.cookie = "nome="+valor+"; expires="+data.toUTCString()+";"
	console.log("Cookie criado com sucesso!");
}

function validaForm(formObj){

    if (formObj.nome.value == "" || formObj.email.value == "" || formObj.comment.value == "") {
        alert("Preencha todos os campos!")
        return false
    }else{
        setCookie(formObj.nome.value)
    }

    if(formObj.email.value.indexOf("@") == -1 || formObj.email.value.indexOf(".") == -1 ||
       formObj.email.value == "" || formObj.email.value == null) {

        alert("Informe um e-mail válido.");
        formObj.email.focus();
        return false;

    }
}

