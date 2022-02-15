//inisialisasi
const express = require("express")

//implementasi
const app = express()
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

//menghubungkan ke database
const db = require('./db');
db.connect(err => {
    if(err) throw err
    console.log("Mysql Connected")
})

//endpoint
app.get("/", (req,res) => {
    res.send({
        message: "berhasil  menjalankan get",
        data : {
            description : "endpoint ini menampilkan data"
        }
    })
})

app.use("/penduduk", require('./routes/penduduk-route'))

const port = 8050;
app.listen(port, () => console.log(`App running ${port}`))