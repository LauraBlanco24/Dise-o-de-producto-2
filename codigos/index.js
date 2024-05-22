var express = require("express");
var app = express();
var coenctado = false;
const port = 3000;
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://adminpastillero:ZF7jyWKTKdqBtEae@clusterpastillero.qjzif5u.mongodb.net/DBpastilero?retryWrites=true&w=majority&appName=CLUSTERPASTILLERO"
  )
  .then(() => {
    console.log("coenctado a la db");
    coenctado = true;
  })
  .catch((err) => {
    console.log(err);
  });

//creacion tablas DB
const userSchema = new mongoose.Schema({
  _id: String,
  nombre: String,
  apellidos: String,
  correo: String,
  cedula: String,
  celular: Number,
  direcccion: String,
  ciudad: String,
  edad: Number,
  password: {
    type: String,
    required: true,
  },
});

const pastilleroSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  cantidad_pastillas: Number,
  bateria: Number,
  fecha: Date,
  pastillas: [String], // el objeto tiene los id de las pastillas
});

const pastillaSchema = new mongoose.Schema({
  _id: String,
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  tipoPastilla: String,
  peso: String,
  dimensiones: String,
  laboratorio: String,
});

const horarioMedicacionSchema = new mongoose.Schema({
  _id: String,
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  fhoraToma: Number,
  frecuenciaDiaria: Object, //el objeto esta por hora y dia
});

const recordatoriosSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  fhoraToma: Number,
  mensaje: String,
});

const registroTomaSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  idPastilla: { type: mongoose.Schema.Types.ObjectId },
  fhRegistro: Number,
  estado: Boolean,
});

const notificacionesSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  fhNotificacion: Number,
  tipoNotificacion: String,
  textoNotificacion: String,
});

const inventarioSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  idPastilla: { type: mongoose.Schema.Types.ObjectId },
  cantidadPastilla: Number,
  fechaReposicion: Date,
});

const datosSaludSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  alergias: [String], //se guardan las alergias en un array
  condicionesMedicas: [String],
  medicamentoActuales: [String], //Nombre de los medicamentos en un array
});

const historialMedicoSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  enfermedades: [String], //se guardan las enfermedades en un array
  procesoMedicos: [String],
  medicamentos: [String], //Nombre de los medicamentos en un array
});

const contactoEmergenciaSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  nombre: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  nombre: String,
  apellidos: String,
  numero: Number,
  parentesco: String,
});

const sincronizacionSchema = new mongoose.Schema({
  _id: String,
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  ultimaSincronizacion: Date,
});

const estadisticasSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  ahderencia: Object,
  tendenciaAhderencia: Object,
});

const dosificacionSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  dosis: Object,
});

const MedicoSchema = new mongoose.Schema({
  _id: String,
  idUsuario: { type: mongoose.Schema.Types.ObjectId },
  nombre: String,
  epecialidad: String,
  direcccion: String,
});

const farmaciaSchema = new mongoose.Schema({
  _id: String,
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  nombre: String,
  numero: Number,
  diasAtencion: String,
  domicilios: Boolean,
});

const ubicacionSchema = new mongoose.Schema({
  _id: String,
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  fechaHora: Number,
  ubicacion: Object,
});

const preferenciasSchema = new mongoose.Schema({
  _id: String,
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  descripcion: String,
  fechaLanzamiento: Date,
  estado: Boolean,
});

const actulizacionesSchema = new mongoose.Schema({
  _id: String,
  idPastillero: { type: mongoose.Schema.Types.ObjectId },
  idioma: String,
  formatoFecha: Date,
});

const paisSchema = new mongoose.Schema({
  _id: String,
  nombrePais: String,
  codigo: String,
});

const ciudadSchema = new mongoose.Schema({
  _id: String,
  idCiudad: { type: mongoose.Schema.Types.ObjectId },
  nombreCiudad: String,
  codigo: String,
});

const userModel = mongoose.model("User", userSchema);
const pastilleroModel = mongoose.model("Pastillero", pastilleroSchema);
const pastillaModel = mongoose.model("Pastilla", pastillaSchema);
const horaioMedicacionModel = mongoose.model("HorarioMedicacion", horarioMedicacionSchema);
const recordatorioModel = mongoose.model("Recordatorio", recordatoriosSchema);
const registroTomaModel = mongoose.model("RegistroToma", registroTomaSchema);
const notificacionesModel = mongoose.model("Notificaciones", notificacionesSchema);
const inventarioModel = mongoose.model("inventario", inventarioSchema);
const datosSaludModel = mongoose.model("DatosSalud", datosSaludSchema);
const HistorialMedicoModel = mongoose.model("HistorialMedico", historialMedicoSchema);
const contactoEmergenciaModel = mongoose.model("ContactoEmergencia", contactoEmergenciaSchema);
const sincronizacionModel = mongoose.model("Sincronizacion", sincronizacionSchema);
const estadisticasModel = mongoose.model("Estadisticas", estadisticasSchema);
const dosificacionModel = mongoose.model("Dosificacion", dosificacionSchema);
const MedicoModel = mongoose.model("Medico", MedicoSchema);
const farmaciaModel = mongoose.model("Farmacias", farmaciaSchema);
const ubicacionModel = mongoose.model("Ubicacion", ubicacionSchema);
const preferenciasModel = mongoose.model("Preferencia", preferenciasSchema);
const actulizacionesModel = mongoose.model("Actulizaciones", actulizacionesSchema);
const paisModel = mongoose.model("Pais", paisSchema);
const ciudadModel = mongoose.model("Ciudad", ciudadSchema);
const rutasProtegidas = express.Router();

rutasProtegidas.use((req, res, next) => {
  const token = req.headers["access-token"];
  if (token) {
    jwt.verify(token, app.get("llave"));
  }
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/temp", (req, res) => {
  console.log(req.query);
  res.send("ok");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  if (registro) {
    bcrypt.hash(registro.password, 10, async function (err, hash) {
      if (err) {
        res.send('Error ' + err.message)
        return;
      }
      registro.password = hash
      try {
        const newUser = new userModel(registro);
        await newUser.save();
        response = { message: "Usuario creado con éxito" };
      } catch (err) {
        response = { message: "No se pudo guardar el usuario", error: err };
      }
      res.send(response);
    });
  }

});

app.post("/pastillero", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newPastillero = new pastilleroModel(registro);
    await newPastillero.save();
    response = { message: "Se anexó correctamente el pastillero" };
  } catch (err) {
    response = { message: "No se pudo anexar el pastillero", error: err };
  }
  res.send(response);
});

app.post("/pastilla", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newPastilla = new pastillaModel(registro);
    await newPastilla.save();
    response = { message: "Se anexó correctamente la pastilla" };
  } catch (err) {
    response = { message: "No se pudo anexar la pastilla", error: err };
  }
  res.send(response);
});

app.post("/horarioMedicacion", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newHorarioMedicacion = new horaioMedicacionModel(registro);
    await newHorarioMedicacion.save();
    response = { message: "Horario anexado correctamente" };
  } catch (err) {
    response = { message: "No se pudo anexar el horario", error: err };
  }
  res.send(response);
});

app.post("/recordatorio", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newRecordatorio = new recordatorioModel(registro);
    await newRecordatorio.save();
    response = { message: "Recordatorio enviado correctamente" };
  } catch (err) {
    response = { message: "No se pudo guardar el recordatorio", error: err };
  }
  res.send(response);
});

app.post("/registroToma", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newRegistroToma = new registroTomaModel(registro);
    await newRegistroToma.save();
    response = { message: "Toma guardada con éxito" };
  } catch (err) {
    response = { message: "No se pudo guardar la toma", error: err };
  }
  res.send(response);
});

app.post("/notificaciones", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newNotificacion = new notificacionesModel(registro);
    await newNotificacion.save();
    response = { message: "Notificación enviada correctamente" };
  } catch (err) {
    response = { message: "No se pudo guardar la notificación", error: err };
  }
  res.send(response);
});

app.post("/inventario", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newInventario = new inventarioModel(registro);
    await newInventario.save();
    response = { message: "Inventario guardado correctamente" };
  } catch (err) {
    response = { message: "No se pudo guardar el inventario", error: err };
  }
  res.send(response);
});

app.post("/datosSalud", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newDatosSalud = new datosSaludModel(registro);
    await newDatosSalud.save();
    response = { message: "Se guardaron exitosamente los datos de salud" };
  } catch (err) {
    response = {
      message: "No se pudo guardar los datos de salud del usuario",
      error: err,
    };
  }
  res.send(response);
});

app.post("/historialMedico", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newHistorialMedico = new HistorialMedicoModel(registro);
    await newHistorialMedico.save();
    response = { message: "Historial médico guardado con éxito" };
  } catch (err) {
    response = {
      message: "No se pudo guardar el historial médico",
      error: err,
    };
  }
  res.send(response);
});

app.post("/contactoEmergencia", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newContactoEmergencia = new contactoEmergenciaModel(registro);
    await newContactoEmergencia.save();
    response = { message: "Contacto de emergencia guardado exitosamente" };
  } catch (err) {
    response = {
      message: "No se pudo guardar el contacto de emergencia",
      error: err,
    };
  }
  res.send(response);
});

app.post("/sincronizacion", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newSincronizacion = new sincronizacionModel(registro);
    await newSincronizacion.save();
    response = { message: "Sincronización exitosa" };
  } catch (err) {
    response = { message: "No se pudo sincronizar", error: err };
  }
  res.send(response);
});

app.post("/estadisticas", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newEstadistica = new estadisticasModel(registro);
    await newEstadistica.save();
    response = { message: "Estadística creada con éxito" };
  } catch (err) {
    response = { message: "No se pudo crear la estadística", error: err };
  }
  res.send(response);
});

app.post("/dosificacion", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newDosificacion = new dosificacionModel(registro);
    await newDosificacion.save();
    response = { message: "Dosificación guardada exitosamente" };
  } catch (err) {
    response = { message: "No se pudo guardar la dosificación", error: err };
  }
  res.send(response);
});

app.post("/medicos", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newMedico = new MedicoModel(registro);
    await newMedico.save();
    response = { message: "Médico guardado exitosamente" };
  } catch (err) {
    response = { message: "No se pudo guardar el médico", error: err };
  }
  res.send(response);
});

app.post("/farmacia", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newFarmacia = new farmaciaModel(registro);
    await newFarmacia.save();
    response = { message: "Farmacia guardada con éxito" };
  } catch (err) {
    response = { message: "No se pudo guardar la farmacia", error: err };
  }
  res.send(response);
});

app.post("/ubicacion", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newUbicacion = new ubicacionModel(registro);
    await newUbicacion.save();
    response = { message: "Ubicación almacenada con éxito" };
  } catch (err) {
    response = { message: "No se pudo guardar la ubicación", error: err };
  }
  res.send(response);
});

app.post("/preferencias", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newPreferencias = new preferenciasModel(registro);
    await newPreferencias.save();
    response = { message: "Preferencias guardadas con éxito" };
  } catch (err) {
    response = { message: "No se pudo guardar las preferencias", error: err };
  }
  res.send(response);
});

app.post("/actulizaciones", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newActulizacion = new actulizacionesModel(registro);
    await newActulizacion.save();
    response = { message: "Actualización enviada correctamente" };
  } catch (err) {
    response = { message: "No se pudo guardar la actualización", error: err };
  }
  res.send(response);
});

app.post("/pais", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newPais = new paisModel(registro);
    await newPais.save();
    response = { message: "País guardado correctamente" };
  } catch (err) {
    response = { message: "No se pudo guardar el país", error: err };
  }
  res.send(response);
});

app.post("/Ciudad", async (req, res) => {
  console.log(req.body);
  let registro = req.body;
  let response = {};
  try {
    const newCiudad = new ciudadModel(registro);
    await newCiudad.save();
    response = { message: "Ciudad guardada correctamente" };
  } catch (err) {
    response = { message: "No se pudo guardar la ciudad", error: err };
  }
  res.send(response);
});

app.post("/login", async (req, res) => {

  let requestLogin = req.body
  console.log(requestLogin)
  let response = {}
  if (requestLogin) {
    //console.log(requestPassword)
    try {
      const data = await userModel.findOne({
        correo: requestLogin.correo,
      });
      console.log(data)

      if (data != null) {
        bcrypt.compare(requestLogin.password, data.password, function (err, result) {
          console.log(result)
          if (!result) {
            response = {
              message: "Usuario o contrasena incorrectos",
              type: "E"
            }
            res.send(response)
          } else {
            response = {
              message: "Acceso correcto",
              type: "E"
            }
            res.send(response)
          }         // result == true
        });
      } else {
        response = {
          message: "Correo o contrasena incorrectos",
          type: "S"
        }
        res.send(response)
      }
    } catch (err) {
      response = {
        message: err,
        type: "E"
      }
    }
  }
});

app.listen(port, () => {
  console.log("ejemplo");
});
