const db = require ("../../models");
const { user } = require ("../../models");
const { checkPassword } = require('../../helpers/bcrypt')
const { generateToken, verifyToken } = require('../../helpers/jwt')
//nama harus sesuai nama tabel Sec User

class user_controller{
  static async findAll(req,res,next){
    user.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async create(req,res,next){
    let {
      username,
      email,
      password,
      role,
      phoneNumber,
      address
    } = req.body
    user.create(req.body)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static async update (req, res, next) {
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

  static async delete (req, res, next){
    user.destroy({ where: { id: req.params.userId } })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static async login (req,res,next){
    
  }
}

module.exports = user_controller;