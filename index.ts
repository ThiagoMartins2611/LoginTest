import express from 'express';
import path from 'path';

const app = express();
const port = 8000;

app.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname, './src/index.html'))

});



app.listen(port, ()=>{
    console.log("servidor rodadno na porta 8000")
})