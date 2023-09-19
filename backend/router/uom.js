const express = require('express')
const router = express.Router();
const Uom = require('../models/uom')

router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {uomName,abbreviation} = req.body
        const uom = new Uom({
            uomName: uomName,
            abbreviation: abbreviation
        })
        await uom.save();
        console.log(uom)
        res.status(200).send(uom)
    } catch (error) {
        res.send({
            error: error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const uom = await Uom.findAll({})
        res.send(uom)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const uom = await Uom.findOne ( {where : { id:req.params.id}})
        res.send(uom)   
        
    } catch (error) {
        res.send(error)
    }
  })


  
router.patch('/:id', async(req,res)=>{
    try {
        Uom.update(req.body, {
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

        const result = await Uom.destroy({
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


module.exports = router;