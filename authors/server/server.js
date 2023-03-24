const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const  DB = "authers"


// MiDDLEWARE =============>

app.use(cors())    ///
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// CONNECT TO DATABASE =========>

require("./config/mongoose.config")(DB)

// IMPORT route =========>

require("./routes/authers.route")(app)

// START THE SERVER =======> 

app.listen(PORT ,()=>{
    console.log(`server up and running ON port ${PORT}`);
})