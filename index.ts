import express from 'express';
import path from 'path';



const app = express();
const port:number = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './src')));



app.get('/', (req:express.Request, res:express.Response)=>{

    res.sendFile(path.join(__dirname, './src/index.html'))
    

});


app.post('/enviar', (req:express.Request, res:express.Response )=>{
    console.log(req.body)

    res.json({sucess: true});
})

app.get('/obrigado', (req:express.Request, res:express.Response)=>{

    res.sendFile(path.join(__dirname, './src/obrigado.html'))
})


app.listen(port, ()=>{
    console.log("servidor rodadno na porta 8000")
})