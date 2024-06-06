import user from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { createAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
  console.log(req.body)
  let registro = req.body;
  if (registro) {
    bcrypt.hash(registro.password, 10, async function (err, hash) {
      if (err) {
        res.send('Error ' + err.message)
        return;
      }
      registro.password = hash
      registro._id = registro.documentID
      try {
        const newUser = new user(registro);
        await newUser.save();
        const token = await createAccessToken({ id: newUser._id })
        res.cookie('accessToken', token)
        res.json({
          message: "Usuario creado con éxito",
          type: "Success"
        })
      } catch (err) {
        res.status(500).json({
          message: "No se pudo guardar el usuario",
          error: err.message,
          type: "Error"
        });
      }
    });
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  console.log(req.body)
  try {
    const userFound = await user.findOne({ email: email });
    console.log(userFound)
    if (!userFound) return res.status(404).json({ message: "Usuario no encontrado", type: "Error" })
    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) return res.status(401).json({ message: "Usuario o contrasena incorrectos", type: "Error" })
    const token = await createAccessToken({ id: userFound._id })
    res.cookie('accessToken', token)
    res.json({
      message: "Accesso Correcto",
      type: "Success"
    })
  } catch (err) {
    return res.status(400).json({ message: "No llegaron los datos", type: "Error" })
  }
}

export const logout = (req, res) => {
  res.cookie('accessToken', "", {
    expires: new Date(0)
  })
  res.sendStatus(200)
}

export const profile = async (req, res) => {
  console.log(req.user.id)
  const dataUser = await user.findById(req.user.id)
  if (!dataUser) return res.status(404).json({ message: "Usuario no encontrado", type: "Error" });


  //return res.send(dataUser)
  return res.json({
    id: dataUser._id,
    firstName:dataUser.firstName,
    lastName: dataUser.lastName,
    email:dataUser.email,
    docummetID: dataUser.documentID,
    phoneNumber: dataUser.phoneNumber,
    address: dataUser.address,
    city: dataUser.city,
    age: dataUser.age,
  })
}
