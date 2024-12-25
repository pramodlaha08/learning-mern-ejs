const express = require('express')
const app = express()
const path = require('path')
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.render('home.ejs')

})

app.get('/rolldice', (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs',{diceValue})
    
});


app.get('/ig/:username', (req, res) => {
    // const followers = ["Muskan Thakur", "Sakshi Thakur", "Riya Thakur", "Shivani Thakur", "Salina Thakur"];
    const instaData = require('./data.json');
    let { username } = req.params;
    const data = instaData[username];
    console.log(data);
    res.render('instagram.ejs', {data});
})
