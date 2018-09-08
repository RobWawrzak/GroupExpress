var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express()

//var PORT = process.env.PORT || 5000;
var PORT = 8090;



app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Displays all characters
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});




//ADDING A NEW RESERVATION
//________________________________
var reservations = [
    {
        routeName: "bob",
        customerName: "test",
        phoneNumber: "test",
        customerEmail: "test",
        customerID: "test"
    },

];

//create new reservation 
app.post("/api/reservations", function (req, res) {
    var newReservation = req.body;

    newReservation.routeName = reservations.customerName.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);

})


app.listen(PORT, function () {
    console.log('Running on PORT ' + PORT);
});