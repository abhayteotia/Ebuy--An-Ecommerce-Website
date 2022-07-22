const app=require("./app");
const cloudinary = require("cloudinary");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database")

dotenv.config({path:"backend/config/config.env"});

// Database path

connectDatabase();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINART_API_SECRET 
// });
cloudinary.config({
    cloud_name: "cloudinary0078",
    api_key: "816984391466877",
    api_secret: "xknBMldf8HbxpqprgWG2wxzMSAc",
  });

 

app.listen(4000,()=>{
    console.log(`server is working at http://localhost:${4000}`);
})