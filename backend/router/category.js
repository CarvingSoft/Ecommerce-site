const Category = require ('../models/category')
const express = require ('express');
const router = express();


router.post('/',async(req,res)=>{
  try {
      const {categoryName} = req.body
      const category = new Category({categoryName})
      await category.save()
      res.send(category)
  } catch (error) {
     res.send(error.message) 
  }
})


router.get('/',async(req,res)=>{
    try {
        const category = await Category.findAll()
        res.send(category)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const category = await Category.findOne ({where: {id:req.params.id}})
        res.send(category) 
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        Category.update(req.body, {
            where: { id: req.params.id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Updated"
                });
              } else {
                res.send({
                  message: `Cannot update `
                });
              }
            })
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
})

router.delete('/:id', async(req,res)=>{
    try {

        const result = await Category.destroy({
            where: { id: req.params.id },
            force: true,
        });

        if (result === 0) {
            return res.status(404).json({
              status: "fail",
              message: "Not found",
            });
          }
      
          res.status(204).json();
        }  catch (error) {
        res.send({error: error.message})
    }
    
})

module.exports = router