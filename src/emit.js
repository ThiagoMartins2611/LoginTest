const formulario = document.getElementById("forms");

formulario.addEventListener("submit", async (e)=>{
    
    e.preventDefault()

   
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const dados = { email, senha };
    
    try{

        await fetch('/enviar', {

            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)

        });


    }catch(erro){
        console.log(erro)
    }
    


   
});