// ====================================================
//      Controller category
// ====================================================

//const db = require('../models/index');
const Category = require('./../models');

//==============================
//Mostrar todas los Categorías
//==============================
let getCategories = (req, res) => {
    //console.log(Category);
    return Category.findAll({});
    /* let categoriesDB = Category.findAll();
    return res.status(200).json({
        ok: true,
        message: 'correcto
        categoriesDB
    }); */
    /* let categoriesDB = Category.findAll((err, categories) => {
        if (err) {
            return res.status(400).json({
                ok: true,
                message: 'Error',
                err
            });
        }
        if (!categories) {
            return res.status(200).json({
                ok: true,
                message: 'No hay categorías registradas',
            });
        }
        return res.status(200).json({
            ok: true,
            message: 'correcto',
            categories
        });
    }); */
}

//==============================
//Mostrar Categorías por id
//==============================
let getCategoryById = (req, res) => {

}

//==============================
//Crear Categoría
//==============================
let saveCategory = (req, res) => {
    let body = req.body;

    let product = new Product({
        name: body.name,
        priceUni: body.priceUni,
        description: body.description,
        enabled: body.enabled,
        category: body.category,
        user: req.user._id
    })

    product.save((err, productDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!productDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            productDB,
            message: 'Producto registrado'
        });
    });
}

//==============================
//Actualizar Categoría
//==============================
let updateCategory = (req, res) => {

}

//==============================
//Eliminar Categoría por id
//==============================
let deleteCategory = (req, res) => {

}

//==============================
//Activar desactivar categoría
//==============================
let statusCategory = (req, res) => {

}

module.exports = {
    getCategories,
    getCategoryById,
    saveCategory,
    updateCategory,
    deleteCategory,
    statusCategory
}