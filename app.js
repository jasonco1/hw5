const express = require("express");
const app = express();
const request = require("request");
const pool = require("./dbPool.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index");
});

//routes
app.get("/frequent", function(req, res){
    res.render("frequent");
});

app.get("/api/updateFrequent", function(req, res){
  let sql;
  let sqlParams;
  switch (req.query.action) {
    case "add": sql = "INSERT INTO favorites (zip, city) VALUES (?,?)";
                sqlParams = [req.query.zip, req.query.city];
                break;
    case "delete": sql = "DELETE FROM favorites WHERE zip = ?";
                sqlParams = [req.query.zip];
                break;
  }//switch
  pool.query(sql, sqlParams, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    res.send(rows.affectedRows.toString());
  });
    
});//api/updateFavorites


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Express server is running");    
});