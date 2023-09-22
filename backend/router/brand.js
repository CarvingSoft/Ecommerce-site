const Brand = require ('../models/brand')
const express = require ('express');
const router = express();


router.post('/',async(req,res)=>{
  try {
      const {brandName} = req.body
      const brand = new Brand({brandName})
      await brand.save()
      res.send(brand)
  } catch (error) {
     res.send(error.message) 
  }
})


router.get('/',async(req,res)=>{
    try {
        const brand = await Brand.findAll()
        res.send(brand)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        const brand = await Brand.findOne ({where: {id:req.params.id}})
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        Brand.update(req.body, {
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

        const result = await Brand.destroy({
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