let Validador = {
    handleSubmit:(event)=>{
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i=0, i<inputs.length;i++) {
            let input = inputs[i]; 
            Validador.checkInput(input);
            if(check !== true) {
                send = false
                //exibir o erro
            }       
        }

        send = false;
        if(send) {
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null) {
            
       
        }

          return true;
    }
}



let form = document.querySelector('Vallidador');
form.addEventListener('submit, Validador.handleSubmit');
