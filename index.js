//import  the express library 
import express from 'express'; 

// creating an instance of an express application
const app = express(); 

// defining the port we want to listen on 
const port = process.env.PORT || 3001

const fruits = {
    banana: {
        color: "yellow"
    }, 
    orange: {
        color: "orange"
    }, 
    apple: {
        color: "green"
    }, 
    pear: {
        color: "green"
    }
}

// setting up a response for the root path of our application
app.get('/fruit/:fruit',(req,res) => {
   console.log(req.params.fruit.substring(1))

   for (const fruit in fruits){
        if(fruit == req.params.fruit.substring(1)) {
            console.log(`The color of this fruit is ${fruits[fruit].color}`)
            res.send(`The color of this fruit is ${fruits[fruit].color}`)
        }   
   
   }

  // req.paramas.fruit
//    res.send(`The fruit you are asking about is ${req.}`)
})

// setting up our application to listen to the port we defined above
app.listen(port, () => {
    console.log(`My app is listening on port ${port}`)
})