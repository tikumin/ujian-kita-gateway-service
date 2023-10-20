
const axiosInstance = require('../helper/axiosInstance')
exports.register = async (req, res) => {
  //console.log(db)
    try {
        axiosInstance.post('http://localhost:3000/api/user/register', {name: req.body.name , emai: req.body.email, password: req.body.password})
        .then((response) => {
            res.send( response.data);
          })
          .catch((error) => {
            res.send( error);
          });
        
      } catch (error) {
        res.status(500).json({success:true, message: 'Error registering user', error: error.message });
      }
}

exports.login = async (req,res) =>{
    try {
        
      } catch (error) {
        res.status(500).json({ message: 'Error authenticating user', error: error.message });
      }
}

exports.verify = async(req,res) =>{
  //validate token
  const token = req.query.token;
  
  try {
  
  } catch (err) {
    // Handle token verification failure
    res.send(err);
  }
}

exports.forgotPasswordSend = async(req,res)=>{

  var {email} = req.body;
  try{
  
  } catch(err){
    return res.status(500).json({ success:false, message: 'internal server error', err:err });

  }
  
}

exports.changePassword = async (req,res)=>{
  try{
  
  }catch(err){
    res.send({success:false, message:"something went wrong", error: err.message})
  }
  
}
