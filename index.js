const express = require("express");
const process = require("process");


const app = express();


app.get('/', (request, response) => {
    response.send("Hello");
});

app.get('/json', (request, response) => {
    response.json({"name": "Ali"});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = app;
