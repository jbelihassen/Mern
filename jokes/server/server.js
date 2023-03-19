const express = require("express");
const app = express();
const PORT = 8000;
const  DB = "jokes"


// MiDDLEWARE

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// CONNECT TO DATABASE 

require("./config/mongoose.config")(DB)

// IMPORT route --------->

require("./routes/jokes.route")(app)

// START THE SERVER 

app.listen(PORT ,()=>{
    console.log(`server up and running ON port ${PORT}`);
})
