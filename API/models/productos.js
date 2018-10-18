const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productosSchema = new Schema({
    id: Number,
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    feCreacion: Date,
    estado: { type: String, default: 'A' }
});

productosSchema.pre('save', function (next) {

    let ahora = new Date();

    this.feCreacion = ahora;
    next();
});

var producto = mongoose.model('producto', productosSchema);

module.exports = producto;