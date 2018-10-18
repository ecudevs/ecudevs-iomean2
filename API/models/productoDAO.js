const ObjectId = require('mongoose').Types.ObjectId;
const productos = require('./productos');

function productoDAO() {

    this.get = function () {
        return new Promise((resolve, reject)=>{
            productos.find({estado:'A'})
            .then(result=>resolve(result))
            .catch(error=>reject(error));
        });
    }

    this.insert = function (producto) {
        return new Promise((resolve, reject) => {

            let productoSave = new productos(producto);
            productoSave.save()
                .then(productoGuardado => resolve(productoGuardado))
                .catch(error => reject(error));
        });
    }

    this.update = function (producto) {
        return new Promise((resolve, reject) => {
            productos.findByIdAndUpdate(ObjectId(producto._id), producto)
                .then(productoGuardado => resolve(productoGuardado))
                .catch(error => reject(error));
        });
    }
}

module.exports = new productoDAO;