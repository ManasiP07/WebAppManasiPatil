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

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});





