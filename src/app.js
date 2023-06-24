const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const partial_path = path.join(__dirname, "../templates/partials")
const views_path = path.join(__dirname , "../templates/views")
app.set('view engine' , 'hbs')
app.set('views' , views_path);
hbs.registerPartials(partial_path);
 
const public = path.join(__dirname , "../public");  
   
app.use(express.static(public));    
app.get('/' , (req, resp)=>{
    resp.render('index');    
})
app.get('/about' , (req, resp)=>{
    resp.render('about');
}) 
app.get('/weather' , (req, resp)=>{
    resp.render('weather');
})
app.get('*', (req,resp)=>{
    resp.render('404error'); 
 
})

app.listen(port, ()=>{
    console.log(`port : ${port}`);
});  