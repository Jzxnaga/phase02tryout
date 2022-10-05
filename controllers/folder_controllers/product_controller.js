const db = require ("../../models");
const { product } = require ("../../models");
const { generateToken, verifyToken } = require('../../helpers/jwt')
//nama harus sesuai nama tabel Sec User

class product_controller{
  static async findAll(req,res,next){
    // include User , Category 
    // User exclude password 
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
      name,
      description,
      price,
      stock,
      imgUrl,
      categoryId,
      authorId // dapat dari authens
    } = req.body
    product.create(req.body)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static async update (req, res, next) {
    product.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        imgUrl: req.body.imgUrl,
        categoryId: req.body.categoryId,
        authorId: req.body.authorId
      },
      {where: req.params.productId}
    )
    .then(data=> {
      res.status(200).json(data)
    })
    .catch(next)
  }

  static async delete (req, res, next){
    product.destroy({ where: { id: req.params.productId } })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = product_controller;