const formulario = document.getElementById("forms");

formulario.addEventListener("submit", async (e)=>{
    
    e.preventDefault()


    const form = new FormData(document.getElementById("forms"));
    
    console.log(form.get('senha'))


});