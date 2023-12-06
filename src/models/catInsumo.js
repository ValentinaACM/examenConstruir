const { Schema, model } = require("mongoose");

const CatInsumoSchema = {
  nombreCatInsumo: {
    type: String,
    required: [true, "El nombre de la categoria del insumo es requerida"],
  },

  descripcionCatInsumo: {
    type: String,
    required: [true, "La descripcion de la categoria del insumo es requerida"],
  },
  estadoCatInsumo: {
    type: Boolean,
    default: true,
  },
};

module.exports = model("CatInsumo", CatInsumoSchema);
