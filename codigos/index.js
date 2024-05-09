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
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cantidad_pastillas: Number,
    bateria: Number,
    fecha: Date,
    pastillas: [String] // el objeto tiene los id de las pastillas 
})

const pastillaSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    tipoPastilla: String,
    peso: String,
    dimensiones: String,
    laboratorio: String,
})

const horarioMedicacionSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    fhoraToma: Number,
    frecuenciaDiaria: Object //el objeto esta por hora y dia 
})

const recordatoriosSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fhoraToma: Number,
    mensaje: String
})

const registroTomaSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    idPastilla: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastilla' },
    fhRegistro: Number,
    estado: Boolean
})

const notificacionesSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    fhNotificacion: Number,
    tipoNotificacion: String,
    textoNotificacion: String
})

const inventarioSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    idPastilla: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastilla' },
    cantidadPastilla: Number,
    fechaReposicion: Date,
})

const datosSaludSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    alergias: [String], //se guardan las alergias en un array
    condicionesMedicas: [String],
    medicamentoActuales: [String] //Nombre de los medicamentos en un array
})

const historialMedicoSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    enfermedades: [String], //se guardan las enfermedades en un array
    procesoMedicos: [String],
    medicamentos: [String] //Nombre de los medicamentos en un array
})

const contactoEmergenciaSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nombre: String, 
    apellidos: String,
    numero: Number,
    parentesco: String 
})

const sincronizacionSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    ultimaSincronizacion: Date
})

const estadisticasSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    ahderencia: Object,
    tendenciaAhderencia: Object
})

const dosificacionSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    dosis: Object
})

const MedicoSchema = new mongoose.Schema({
    _id: String,
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    nombre: String,
    epecialidad: String,
    direcccion: String
})

const farmaciaSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    nombre: String,
    numero: Number,
    diasAtencion: String,
    domicilios: Boolean
})

const ubicacionSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    fechaHora: Number,
    ubicacion: Object
})

const preferenciasSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    descripcion: String,
    fechaLanzamiento: Date,
    estado: Boolean
})

const actulizacionesSchema = new mongoose.Schema({
    _id: String,
    idPastillero: { type: mongoose.Schema.Types.ObjectId, ref: 'Pastillero' },
    idioma: String,
    formatoFecha: String,
    formatoHora: String
})

const paisSchema = new mongoose.Schema({
    _id: String,
    nombrePais: String,
    codigo: String
})

const ciudadSchema = new mongoose.Schema({
    _id: String,
    idCiudad: { type: mongoose.Schema.Types.ObjectId, ref: 'Pais' },
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