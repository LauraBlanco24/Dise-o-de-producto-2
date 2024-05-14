var express = require('express');
var app = express();
var coenctado = false
const port = 3000;
const mongoose = require('mongoose')

app.use(express.json())

mongoose.connect('mongodb+srv://adminpastillero:ZF7jyWKTKdqBtEae@clusterpastillero.qjzif5u.mongodb.net/DBpastilero?retryWrites=true&w=majority&appName=CLUSTERPASTILLERO',
).then(() => {
    console.log('coenctado a la db')
    coenctado = true
}).catch((err) => {
    console.log(err)
})

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
    edad: Number
})

const pastilleroSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    cantidad_pastillas: Number,
    bateria: Number,
    fecha: Date,
    pastillas: [String] // el objeto tiene los id de las pastillas 
})

const pastillaSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    tipoPastilla: String,
    peso: String,
    dimensiones: String,
    laboratorio: String,
})

const horarioMedicacionSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    fhoraToma: Number,
    frecuenciaDiaria: Object //el objeto esta por hora y dia 
})

const recordatoriosSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    fhoraToma: Number,
    mensaje: String
})

const registroTomaSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    idPastilla: { type: mongoose.Schema.Types.ObjectId },
    fhRegistro: Number,
    estado: Boolean
})

const notificacionesSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    fhNotificacion: Number,
    tipoNotificacion: String,
    textoNotificacion: String
})

const inventarioSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    idPastilla: { type: mongoose.Schema.Types.ObjectId },
    cantidadPastilla: Number,
    fechaReposicion: Date,
})

const datosSaludSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    alergias: [String], //se guardan las alergias en un array
    condicionesMedicas: [String],
    medicamentoActuales: [String] //Nombre de los medicamentos en un array
})

const historialMedicoSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId},
    enfermedades: [String], //se guardan las enfermedades en un array
    procesoMedicos: [String],
    medicamentos: [String] //Nombre de los medicamentos en un array
})

const contactoEmergenciaSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    nombre: String, 
    apellidos: String,
    numero: Number,
    parentesco: String 
})

const sincronizacionSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    ultimaSincronizacion: Date
})

const estadisticasSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    ahderencia: Object,
    tendenciaAhderencia: Object
})

const dosificacionSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId},
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    dosis: Object
})

const MedicoSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId },
    nombre: String,
    epecialidad: String,
    direcccion: String
})

const farmaciaSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    nombre: String,
    numero: Number,
    diasAtencion: String,
    domicilios: Boolean
})

const ubicacionSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    fechaHora: Number,
    ubicacion: Object
})

const preferenciasSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    descripcion: String,
    fechaLanzamiento: Date,
    estado: Boolean
})

const actulizacionesSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId },
    idioma: String,
    formatoFecha: Date, 
})

const paisSchema = new mongoose.Schema({
    _id: String,
    nombrePais: String,
    codigo: String
})

const ciudadSchema = new mongoose.Schema({
    _id: String,
    idCiudad: { type: mongoose.Schema.Types.ObjectId },
    nombreCiudad: String,
    codigo: String
})

const userModel = mongoose.model('User', userSchema)
const pastilleroModel = mongoose.model('Pastillero', pastilleroSchema)
const pastillaModel = mongoose.model('Pastilla', pastillaSchema)
const horaioMedicacionModel = mongoose.model('HorarioMedicacion', horarioMedicacionSchema)
const recordatorioModel = mongoose.model('Recordatorio', recordatoriosSchema)
const registroTomaModel = mongoose.model('RegistroToma', registroTomaSchema)
const pnotificacionesModel = mongoose.model('Notificaciones', notificacionesSchema)
const inventarioModel = mongoose.model('inventario', inventarioSchema)
const datosSaludModel = mongoose.model('DatosSalud', datosSaludSchema)
const HistorialMedicoModel = mongoose.model('HistorialMedico', historialMedicoSchema)
const contactoEmergenciaModel = mongoose.model('ContactoEmergencia', contactoEmergenciaSchema)
const sincronizacionModel = mongoose.model('Sincronizacion', sincronizacionSchema)
const estadisticasModel = mongoose.model('Estadisticas', estadisticasSchema)
const dosificacionModel = mongoose.model('Dosificacion', dosificacionSchema)
const MedicoModel = mongoose.model('Medico', MedicoSchema)
const farmaciaModel = mongoose.model('Farmacias', farmaciaSchema)
const ubicacionModel = mongoose.model('Ubicacion', ubicacionSchema)
const preferenciasModel = mongoose.model('Preferencia', preferenciasSchema)
const actulizacionesModel = mongoose.model('Actulizaciones', actulizacionesSchema)
const paisModel = mongoose.model('Pais', paisSchema)
const ciudadSModel = mongoose.model('Ciudad', ciudadSchema)


const rutasProtegidas = express.Router()

rutasProtegidas.use((req, res, next)=>{
    const token = req.headers["access-token"]
    if(token){
        jwt.verify(token, app.get("llave"))
    }
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/temp', (req, res) => {
    console.log(req.query)
    res.send('ok');
});

app.post('/register', async (req, res) => {
    console.log(req.body)
    let registro = req.body
    try {
        const newUser = new userModel(registro)
        await newUser.save()
        let response = {
            message: 'El registro se guardo correctamente'
        }
        res.send(response);
    } catch (err) {
        let response = {
            message: 'El registro no se guardo correctamente',
            error: err
        }
        res.send(response);
    }

});


app.listen(port, () => {
    console.log('ejemplo')
})