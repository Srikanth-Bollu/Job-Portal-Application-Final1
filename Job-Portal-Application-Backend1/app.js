const express=require("express");
const app=express();
const mongoose=require("mongoose");
const morgan=require("morgan");
const bodyParser=require("body-parser");
require("dotenv").config();
var cors=require("cors");
const cookieParser = require("cookie-parser");
const errorHandler=require("./middleware/error");

// import routes
const authRoutes=require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes")
const jobTypeRoute = require("./routes/jobsTypeRoutes")
const jobsRoutes = require("./routes/jobsRoutes")
// databse connection

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err));

// MddleWare

app.use(morgan('dev'));
app.use(bodyParser.json({limit: "%mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser())
app.use(cors())

// Routes Middleware

// app.get('/',(req,res)=>{
//     res.send("Hello from js")
// })

app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", jobTypeRoute)
app.use("/api", jobsRoutes)
// error middleware
app.use(errorHandler)

// port
// const port=process.env.PORT || 8000

app.listen(3000, ()=>{
    console.log("server running on port 3000");
});