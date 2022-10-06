const db = require ("../../models");
const { user } = require ("../../models");
const { checkPassword } = require('../../helpers/bcrypt')
const { generateToken, verifyToken } = require('../../helpers/jwt')
//nama harus sesuai nama tabel Sec User

class user_controller{
  static findAll(req,res,next){
    user.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static create(req,res,next){
    console.log('masuk create userd')
    let {
      username,
      email,
      password,
      phoneNumber,
      address
    } = req.body

    user.create({
      username,
      email,
      password,
      role: "admin",
      phoneNumber,
      address})

    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static login(req,res,next){
    const {username, password} = req.body
    if (!username || !password){
      throw {"name":"username / password required"}
    }
    console.log(password)

    user.findOne({where: { username }})
    .then(data=>{
      if(data){
        let compare = checkPassword(password, data.password)
        console.log(compare)
        if(compare){
          
          let payload = { id: data.id, username: data.username}
          let access_token = generateToken(payload)
        
          console.log(access_token)
          res.status(200).json({access_token,username})
        }
        else{
          throw ({name: 'Invalid Password'})
        }
      } 
      else{
        throw ({name: 'Invalid Username'})
      }
    })
    .catch(err=>{
      next(err)
    })
  }

  static update (req, res, next) {
    user.update(
      {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
      },
      {where: req.params.userId}
    )
    .then(data=> {
      res.status(200).json(data)
    })
    .catch(next)
  }

  static delete (req, res, next){
    user.destroy({ where: { id: req.params.userId } })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = user_controller;