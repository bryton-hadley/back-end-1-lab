// first going start by setting a variable's to import the express package and cors package

const express = require("express");

const cors = require("cors");

// to avoid repating code i will creat a variable called app that i will resuse agian to initialize the express comands

const app = express();

//step 5: use the use method from the express method to invoke express.json

app.use(express.json());

// step 6: this will be similar to the last step except i will be invoking cors()

app.use(cors());

//step 8: creating endpoint's

app.get("/api/users", (req, res) => {

    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];

    res.status(200).send(friends);
})

app.get('/weather/:temperature', (req, res) => {
   
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
   
    res.status(200).send(phrase);
});

app.get("/weather/:temperature", (req, res) => {
   
    const { temperature } = req.params;
   
    const phrase = `<h3>It was ${temperature} today</h3>`;
   
    res.status(200).send(phrase);
  });
  

//step 7:  i am going to set express server to listen to a request on port 4000

app.listen(4000, () => {
    console.log("Server running on port 4000")
});



