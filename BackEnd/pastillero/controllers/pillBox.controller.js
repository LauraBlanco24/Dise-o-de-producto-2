import pillBox from '../models/pillbox.model.js'

export const addPillBox = async (req, res) => {
    console.log(req.body)
    console.log(JSON.stringify(req.body.pills))
    
    const dataPillBox = req.body
    if(dataPillBox){
        try{
            dataPillBox._id = req.user.id + '_' + dataPillBox.name
            dataPillBox.userID = req.user.id

            const newPillBox = new pillBox(dataPillBox)
            await newPillBox.save()

            res.json({
                message: "El Dispositivo Se Anexado Exitosamente",
                type: "Success"
            })
        }catch (err){
            res.json({
                message: "El dispositivo no de pudo anexar",
                description: err.message,
                type: "Error"
            })
        }
    }else{
        res.starus(500).json({
            messaje:"No se enviaron datos de registro", 
            type: "Error"
        })
    }

}