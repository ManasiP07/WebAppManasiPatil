const express = require("express");
console.log("Hello World");

var app = express();
app.get("/api/hello", function(req, res) {
    var product= {
        id: 1,
        name: "apple",
        price: 2.99
    };
    res.send(product);
});
app.get("/api/thanks", function(req, res) {
    var thankyou= {
        id: 12,
        name: "wheel",
        price: 233
    };
    res.send(thankyou);
});


app.get("/api/sorry", function(req, res) {
    var soSorry= {
        id: 7,
        name: "wheel",
        price: 233
    };
    res.send(soSorry);
});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});





