const db = require ("../../models");
const { product , user , category} = require ("../../models");
const { generateToken, verifyToken } = require('../../helpers/jwt')
//nama harus sesuai nama tabel Sec User

class product_controller{
  static async findAll(req,res,next){
    product.findAll({include: [{ model: user , attributes:['username','email']}, {model: category} ]})
      .then(data=>{
        console.log(req.userData)
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async create(req,res,next){
    let body = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      imgUrl: req.body.imgUrl,
      categoryId: req.body.categoryId,
      authorId: req.userData.id
    }
    category.findByPk(req.body.categoryId)
    .then(oneCategory=>{
      if(oneCategory){
        return product.create(body)
      }else{
        throw{"name":"no id category found"}
      }
    })
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      console.log('err.name')
      next(err)
    })
  }

  static async update (req, res, next) {
    if(req.userData.id == req.body.authorId){
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
    }else{
      throw ({message:'unauthorized to change someone else product'})
    }
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