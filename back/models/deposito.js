const mongoose = require('mongoose');
const moment = require('moment');
const timestamp = require('mongoose-timestamp');
const depositoSchema = new mongoose.Schema({
  monto: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    default:""
  },
  fecha: {
    type: String,
    required: true,
    default: moment().format('YYYY-MM-DD'),
    set: function (value) {
      return moment(value).format('YYYY-MM-DD');
    },
    validate: {
      validator: function (value) {
        return moment(value, 'YYYY-MM-DD', true).isValid();
      },
      message: 'Formato de fecha inválido. Utilice el formato YYYY-MM-DD.'
    }
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});
depositoSchema.plugin(timestamp)
const Deposito = mongoose.model('Deposito', depositoSchema);

module.exports = Deposito;
