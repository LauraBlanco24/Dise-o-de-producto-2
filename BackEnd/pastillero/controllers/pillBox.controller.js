import pillBox from '../models/pillbox.model.js'

export const addPillBox = async (req, res) => {
    const dataPillBox = req.body
    if(dataPillBox){
        try{

        }catch (err){
    
        }
    }else{
        res.starus(500).json({messaje:"No se enviaron datos de registro", type: "Error"})
    }

}