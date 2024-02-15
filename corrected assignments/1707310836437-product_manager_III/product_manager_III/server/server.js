const express = require('express');
const app = express();
const cors = require('cors')



// Allow requests from React localhost
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

//---MIDDLEWARE ---
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))
require("dotenv").config()
require("./config/mongoose.config")
require("./routes/product.routes")(app)
const port = process.env.PORT



app.listen(port, () => console.log(`Listening on port: ${port}`));








