//Execute, after the project loads
document.addEventListener('DOMContentLoaded', function(){
    //Select interface elements
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Events to listen changes inside inputsb
    //Asign events
    //We can use blur when we get out from the input
    inputEmail.addEventListener('blur',validate)
    inputAsunto.addEventListener('blur',validate)
    inputMensaje.addEventListener('blur',validate)
    function validate(e){
        console.log(e.target.id)
        //Implementate trim for spaces
        if(e.target.value.trim() == ""){
           showAlert(e.target.id)
        }
        else{
            if(e.target.id == 'email'){
                e.target.textContent.split('@')
            }
            console.log('hay algo')
        }
    }
    function showAlert(id){
        //Generate an html alert with JS scripting
        const error = document.createElement('DIV');
        error.textContent = `El campo ${id} es obligatorio`;
        error.classList.add('bg-red-600', 'text-white','p-2');
        //InnerHtml clean and replace all the content
        //appendChild to add an element to a node or add a children
        formulario.appendChild(error)

    }
})