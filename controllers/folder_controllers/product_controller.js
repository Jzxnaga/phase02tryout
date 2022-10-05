const db = require ("../../models");
const { product } = require ("../../models");
const { generateToken, verifyToken } = require('../../helpers/jwt')
//nama harus sesuai nama tabel Sec User

class product_controller{
  static async findAll(req,res,next){
    product.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async create(req,res,next){
    let {
      name
    } = req.body
    category.create(req.body)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static async update (req, res, next) {
    category.update(
      {name: req.body.name},
      {where: req.params.categoryId}
    )
    .then(data=> {
      res.status(200).json(data)
    })
    .catch(next)
  }

  static async delete (req, res, next){
    Invoice.destroy({ where: { id: req.params.categoryId } })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = product_controller;