const mongoose=require("mongoose");
const config=require("config");
// const  db=config.get("mongoURI");


mongoURI="mongodb://naumantasaduq665:Uzwy8ESbrcY4HS52@ac-z9tgco4-shard-00-00.l85d5l4.mongodb.net:27017,ac-z9tgco4-shard-00-01.l85d5l4.mongodb.net:27017,ac-z9tgco4-shard-00-02.l85d5l4.mongodb.net:27017/database?ssl=true&replicaSet=atlas-9efijt-shard-0&authSource=admin&retryWrites=true&w=majority"



const connectDB= async () => {
try{

   
 mongoose.connect(mongoURI,{
 useNewUrlParser: true,

});

console.log("db is connected");

}
catch (err){
  
    console.log("Connection failed");
    process.exit(1);


};

}

module.exports=connectDB;