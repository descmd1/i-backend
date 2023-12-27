// // const express = require("express");
// // const db = require("./index");
// // const cors = require("cors");
// // const bodyParser = require('body-parser');


// // const app = express();

// // var corsOptions = {
// //   origin: "http://localhost:3000"
// // };

// // app.use(cors(corsOptions));

// // // parse requests of content-type - application/json
// // app.use(express.json());

// // // parse requests of content-type - application/x-www-form-urlencoded
// // app.use(bodyParser.urlencoded({ extended: false }));



// // db.sequelize.sync()
// //   .then(() => {
// //     console.log("Synced db.");
// //   })
// //   .catch((err) => {
// //     console.log("Failed to sync db: " + err.message);
// //   });

// // // // drop the table if it already exists
// // // db.sequelize.sync({ force: true }).then(() => {
// // //   console.log("Drop and re-sync db.");
// // // });

// // // simple route
// // app.get("/", (req, res) => {
// //   res.json({ message: "Welcome to bezkoder application." });
// // });

// // require("./routes/login.route")(app);

// // // set port, listen for requests
// // const PORT = process.env.PORT || 8080;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}.`);
// // });

// var express = require('express')
// var cors = require('cors')
// var db = require('./util/database')
// var bodyParser = require('body-parser')
// var app = express()
// var port = process.env.PORT || 5000

// app.use(bodyParser.json())
// app.use(cors())
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// )

// var Users = require('./routes/user.route')

// app.use('/users', Users)
// db.sequelize.sync()
// .then(result =>{
// app.listen(port, function() {
//   console.log('Server is running on port: ' + port)
// });
// })
// .catch(err =>{
//   console.log(err)
// })


const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "i_transit"
})

//signup api
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO signup (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

//login api
app.post('/login', (req, res) => {
    const sql = "INSERT INTO login (`email`, `password`) VALUES (?)";
    const values = [
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

//passenger api
app.post('/passengers', (req, res) => {
    const sql = "INSERT INTO passenger (`firstname`, `lastname`, `phone`, `address`, `nextofkin_name`, `nextofkin_address`, `nextofkin_phone` ) VALUES (?)";
    const formData = [
        req.body.firstname,
        req.body.lastname,
        req.body.phone,
        req.body.address,
        req.body.nextofkin_name,
        req.body.nextofkin_address,
        req.body.nextofkin_phone
    ]
    db.query(sql, [formData], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})


app.get('/passengers', (req, res) => {
    const sql = "SELECT * FROM passenger"
    db.query(sql, (err, data) => {
        console.log(data)
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
// app.get("/passengers", (req, res) => {
// db.connect(function(err){
//     if(err) throw err;
//     db.query("SELECT firstname, lastname, phone, address FROM passenger",
//     function (err, result, fields){
//         if (err) throw err;
//         console.log(result)
//     });
// });
// })




//station api
app.post('/station', (req, res) => {
    const sql = "INSERT INTO station (`park_name`, `city`, `state`, `destination`, `number_of_passengers`, `bus_capacity`, `date` ) VALUES (?)";
    const values = [
        req.body.park_name,
        req.body.city,
        req.body.state,
        req.body.destination,
        req.body.number_of_passengers,
        req.body.bus_capacity,
        req.body.date
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get('/station', (req, res) => {
    const sql = "SELECT * FROM station"
    db.query(sql, (err, data) => {
        console.log(data)
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})


//claims api
app.post('/claims', (req, res) => {
    const sql = "INSERT INTO claims (`policy_number`, `first_name`, `last_name`, `date_of_loss`, `loss_description`, `amount` ) VALUES (?)";
    const values = [
        req.body.policy_number,
        req.body.first_name,
        req.body.last_name,
        req.body.date_of_loss,
        req.body.loss_description,
        req.body.amount,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.get('/claims', (req, res) => {
    const sql = "SELECT * FROM claims"
    db.query(sql, (err, data) => {
        console.log(data)
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.listen(3001, () =>{
    console.log("Server running on port 3001");
})