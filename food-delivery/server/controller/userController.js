const users = require('../model/userSchema');
const foods = require('../model/foodSchema')
const orders = require('../model/cartSchema');


exports.addUser = async(req,res)=>{

    console.log(`Inside add user function`);
    
    const {fname,mobile,email,address,password} = req.body
    console.log(req.body);

    try {
        const existingUser = await users.findOne({email})
        if (existingUser){
            res.status(406).json("User already exist!!!")
            // console.log({preuser});
        }
        else{
            const newuser = new users({
                fname,mobile,email,address,password
            })
            console.log(newuser);

            await newuser.save()
            res.status(200).json(newuser)
        }

        
    } 
    catch (error) {
        res.status(401).json(error)
        console.log(error);
    }


}

exports.loginUser = async(req,res)=>{

    console.log(`Inside login user function`);
    
    const {mobile,password} = req.body
    console.log(req.body);


    try {
          // check number in mongodb
     const person= await users.findOne({mobile,password})
     console.log(person);

     if(person){
      res.status(200).json(person)
     }
     else{
      res.status(404).json("Invalid number or Password")
     }

        
    } 
    catch (error) {
        res.status(401).json("Error"+error)
    }


}

exports.allfoods = async(req,res)=>{

    console.log(`Inside all food function`);
    const search = req.query.search
    const query = {
        name:{$regex:search, $options:"i"}
    }
    

    try {
          // check number in mongodb
     const person= await foods.find(query)
     console.log(person);
     if(person){
      res.status(200).json(person)
     }
     else{
      res.status(404).json("No items available")
     }

        
    } 
    catch (error) {
        res.status(401).json("Error"+error)
    }


}

//Order

exports.orderNow = async(req,res)=>{
    console.log(`Inside order user function`);
    
    const {name,fname,mobile,quantity,price} = req.body
    console.log(req.body);

    try {
        const result = await users.findOne({mobile})
        if (result){
            result.myorders.push({
                
                
                name:name,
                quantity:quantity,
                total:price*quantity
               

            })
            await result.save()
            console.log(result);
            const neworder = orders({...req.body,
                
                total:price*quantity
            })
            console.log(neworder);   
            await neworder.save()   
            
            res.status(200).json({result})
           
        }
        else{

            res.status(406).json("Please Login!!!")
            
        }

        
    } 
    catch (error) {
        res.status(401).json("Error"+error)
    }

}


// allusers

exports.allusers = async(req,res)=>{
    console.log("inside all users");
    try {
        // check number in mongodb
   const person= await users.find()
   console.log(person);

   if(person){
    res.status(200).json(person)
   }
   else{
    res.status(404).json("No orders")
   }

      
  } 
  catch (error) {
      res.status(401).json("Error"+error)
  }

}

// allorders

exports.allorders = async(req,res)=>{
    console.log("inside all users");
    try {
        // check number in mongodb
   const person= await orders.find()
   console.log(person);
   if(person){
    res.status(200).json(person)
   }
   else{
    res.status(404).json("No orders")
   }

      
  } 
  catch (error) {
      res.status(401).json("Error"+error)
  }

}

// forgot password

exports.forgotpassword = async(req,res)=>{
    console.log(`Inside forgot function`);
    
    const {mobile,email} = req.body
    console.log(req.body);


    try {
          // check number in mongodb
     const person= await users.findOne({mobile,email})
     console.log(person);

     if(person){
      res.status(200).json(person)
     }
     else{
      res.status(404).json("No users found")
     }

        
    } 
    catch (error) {
        res.status(401).json("Error"+error)
    }


}

// allusers count

exports.alluserscount = async(req,res)=>{
    console.log("inside all users count");
    try {
        // check number in mongodb
   const person= await users.find().count()
   console.log(person);

   if(person){
    res.status(200).json(person)
   }
   else{
    res.status(404).json("No orders")
   }

      
  } 
  catch (error) {
      res.status(401).json("Error"+error)
  }

}

// all orders count

exports.allordersscount = async(req,res)=>{
    console.log("inside all users count");
    try {
        // check number in mongodb
   const person= await orders.find().count()
   console.log(person);

   if(person){
    res.status(200).json(person)
   }
   else{
    res.status(404).json("No orders")
   }

      
  } 
  catch (error) {
      res.status(401).json("Error"+error)
  }

}
