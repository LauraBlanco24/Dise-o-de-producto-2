import pillBox from '../models/pillbox.model.js'

export const addPillBox = async (req, res) => {
    const dataPillBox = req.body
    if (dataPillBox) {
        try {
            dataPillBox._id = req.user.id + '_' + dataPillBox.name
            dataPillBox.userID = req.user.id

            const newPillBox = new pillBox(dataPillBox)
            await newPillBox.save()

            res.json({
                message: "El Dispositivo Se Anexado Exitosamente",
                type: "Success"
            })
        } catch (err) {
            res.json({
                message: "El dispositivo no de pudo anexar",
                description: err.message,
                type: "Error"
            })
        }
    } else {
        res.starus(500).json({
            messaje: "No se enviaron datos de registro",
            type: "Error"
        })
    }

}

export const getPillBox = async (req, res) => {
    const pillBoxData = await pillBox.findById(req.params.id)

    if (!pillBoxData) return res.status(404).json({ message: "No se encontro informacion del disopitivo", type: "Error", data: [] })
    res.json({
        message: "Informacion encontrada con exito",
        type: "Success",
        data: {
            "id":pillBoxData._id,
            "name": pillBoxData.name,
            "amountPills": pillBoxData.amountPills,
            "battery": pillBoxData.battery,
            "date": pillBoxData.date,
            "pills": pillBoxData.pills
        }
    })
}

export const getPillBoxes = async (req, res) => {
    const pillBoxes = await pillBox.find({ userID: req.user.id })

    let pillBoxesData = []
    
    for (let index = 0; index < pillBoxes.length; index++) {
        pillBoxesData.push({
            "id":pillBoxes[index]._id,
            "name": pillBoxes[index].name,
            "amountPills": pillBoxes[index].amountPills,
            "battery": pillBoxes[index].battery,
            "date": pillBoxes[index].date,
            "pills": pillBoxes[index].pills
        })
    }

    if (!pillBoxes || pillBoxes.length == 0) return res.status(404).json({ message: "No se encontraron dispositivos para el usuario", type: "Error", data: [] })
    res.json({
        message: "Informacion de los dispositivos",
        type: "Success",
        data: pillBoxesData
    })
}

export const deletePillBox = async (req, res) =>{
    const dataPillBox = await pillBox.findByIdAndDelete(req.params.id)
    if(!dataPillBox) return res.status(404).json({ message: "No se puedo elminar el dispositivo porque no se encontro", type: "Error"})
    res.json({ message: "Pastillero eliminado exitosamente", type: "Success"})
}

export const updatePillBox = async (req, res) =>{
    
}