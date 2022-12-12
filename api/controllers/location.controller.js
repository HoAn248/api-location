const locationSchema = require('../models/location.model')

const locationController = {
    getlocations: async (req, res)=>{
       try{
        const location = await locationSchema.find()
        res.status(200).json(location);
       }catch(err){
        res.status(500).json({Message: err.message});

       }
    },
    createlocations: async (req, res)=>{
        try{
         const location = new locationSchema(req.body)
         const savelocation = await location.save();
         res.status(200).json(savelocation);
        }catch(err){
            res.status(500).json({Message: err.message});

        }
     },
     deletelocations: async (req, res)=>{
        try{
         const location = new locationSchema(req.body)
         const removelocation = await location.remove();
         res.status(200).json(removelocation);
        }catch(err){
            res.status(500).json({Message: err.message});

        }
     },
}

module.exports = locationController