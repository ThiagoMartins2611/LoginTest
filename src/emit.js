const formulario = document.getElementById("forms");

formulario.addEventListener("submit", async (e)=>{
    
    e.preventDefault()

   
    const user = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;
  
    const dados = { user, senha };
    
    try{

       const response = await fetch('/enviar', {

            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)

        });

        const data = await response.json()

        console.log(data)

        if(data.sucess){
            window.location.href = '/obrigado';
        }


    }catch(erro){
        console.log(erro)
    }
    


   
});