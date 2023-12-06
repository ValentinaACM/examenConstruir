const { response } = require("express");

CatInsumo = require("../models/catInsumo");

const getCatInsumo = async (req, res) => {
  const catInsumo = await CatInsumo.find(); //Obtener todos los dococumentos de una coleccion
  res.json({
    msg: catInsumo,
  });
};

const postCatInsumo = async (req, res) => {
  const datos = req.body; //Capturar datos de la URL-postman
  let mensaje = "Insercion exitosa";
  try {
    const catInsumo = new CatInsumo(datos); //Instanciar el objeto
    await catInsumo.save(); //Guardar en la base de datos
    console.log(catInsumo);
  } catch (error) {
    mensaje = error;
    console.log(error);
  }

  res.json({
    msg: mensaje,
  });
};

const putCatInsumo = async (req, res) => {
  const { _id, nombreCatInsumo, descripcionCatInsumo, estadoCatInsumo } =
    req.body;
  try {
    const catInsumo = await CatInsumo.findOneAndUpdate(
      { _id: _id },
      {
        nombreCatInsumo: nombreCatInsumo,
        descripcionCatInsumo: descripcionCatInsumo,
        estadoCatInsumo: estadoCatInsumo,
      }
    ); //las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio

    mensaje = "Actualizacion exitosa";
  } catch (error) {
    mensaje = error;
  }
  res.json({
    msg: mensaje,
  });
};

const deleteCatInsumo = async (req, res) => {
  const { _id } = req.body; //Desestructurar
  try {
    const catInsumo = await CatInsumo.findOneAndDelete({ _id: _id });
    mensaje = "Eliminacion exitosa";
  } catch (error) {
    mensaje = error;
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = {
  getCatInsumo,
  postCatInsumo,
  putCatInsumo,
  deleteCatInsumo,
};
