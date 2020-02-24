// ====================================================
//      Controller Donation Type
//      By AYRA Team ©
// ====================================================

const DonationType = require('../models').DonationType;

//======================================
//Mostrar todos los tipos de donaciones
//======================================
async function getDonationTypes(req, res) {
    await DonationType.findAll({ where: { status: true } })
        .then(types => {
            if (types.length === 0) {
                return res.status(200).json({
                    ok: false,
                    message: 'No hay tipo de donación registrado',
                });
            } else {
                res.status(200).json({
                    ok: true,
                    message: 'correcto',
                    types
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                ok: false,
                message: 'Ha ocurrido un error',
                err
            });
        });
}

//=================================
//Mostrar tipo de donacione por id
//=================================
async function getDonationTypeById(req, res) {
    let id = req.params.id;
    await DonationType.findOne({ where: { id } })
        .then(type => {
            if (type === null) {
                return res.status(200).json({
                    ok: false,
                    message: 'No hay tipo de donación con el id requerido',
                });
            } else {
                res.status(200).json({
                    ok: true,
                    message: 'correcto',
                    type
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                message: 'Ha ocurrido un error',
                err
            });
        });
}

//==============================
//Crear tipo de donación
//==============================
async function saveDonationType(req, res) {
    let body = req.body;

    let type = {
        name: body.name,
        description: body.description,
        status: body.status
    }

    await DonationType.create(type)
        .then(type => {
            res.status(200).json({
                ok: true,
                message: 'Tipo de donación creado con éxito',
                type
            });
        })
        .catch(err => {
            res.status(500).send({
                ok: false,
                message: 'Tipo de donación no creado, ha ocurrido un error',
                error: err.message
            });
        });;
}

//==============================
//Actualizar tipo de donación
//==============================
async function updateDonationType(req, res) {
    let id = req.params.id;

    await DonationType.update(req.body, { where: { id: id } })
        .then(data => {
            if (data == 1) {
                res.status(200).json({
                    ok: true,
                    message: 'Tipo de donación actualizado con éxito',
                    data
                });
            } else {
                res.status(200).json({
                    ok: false,
                    message: `No existe el tipo de donación con id = ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                message: `No se pudo actualizar el tipo de donación con id = ${id}.`,
                error: err.message
            });
        });
}

//==================================
//Eliminar tipo de donación por id
//==================================
async function deleteDonationType(req, res) {
    let id = req.params.id;

    await DonationType.destroy({ where: { id: id } })
        .then(data => {
            if (data == 1) {
                res.status(200).json({
                    ok: true,
                    message: 'Tipo de donación eliminado con éxito',
                    data
                });
            } else {
                res.status(200).json({
                    ok: false,
                    message: `No existe el tipo de donación con id = ${id}.`
                });
            }
        })
        .catch(err => {
            rres.status(500).json({
                ok: false,
                message: `No se pudo eliminar el tipo de donación con id = ${id}.`,
                err
            });
        });
}

//=====================================
//Activar desactivar tipo de donación
//=====================================
async function statusDonationType(req, res) {
    let id = req.params.id;

    let typeDonation;
    await DonationType.findOne({ where: { id } })
        .then(type => {
            if (type === null) {
                return res.status(200).json({
                    ok: false,
                    message: 'No hay tipo de donación con el id requerido',
                });
            } else {
                typeDonation = type;
            }
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                message: 'Ha ocurrido un error',
                err
            });
        });

    let change = true;

    if (typeDonation.status === true)
        change = false;

    await DonationType.update({ status: change }, { where: { id: id } })
        .then(data => {
            res.status(200).json({
                ok: true,
                message: 'Tipo de donación actualizado con éxito',
                data
            });
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                message: `No se pudo actualizar el tipo de donación con id = ${id}.`,
                err
            });
        });
}

module.exports = {
    getDonationTypes,
    getDonationTypeById,
    saveDonationType,
    updateDonationType,
    deleteDonationType,
    statusDonationType
}