import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect(
         "mongodb+srv://adminpastillero:ZF7jyWKTKdqBtEae@clusterpastillero.qjzif5u.mongodb.net/DBpastilero?retryWrites=true&w=majority&appName=CLUSTERPASTILLERO"
       )
       .then(() => {
         console.log("conectado a la db");
         //coenctado = true;
       })
       .catch((err) => {
         console.log(err);
       });
 } 
 