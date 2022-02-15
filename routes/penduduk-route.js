'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk-controller')
const router = new express.Router();

router.get("/halo", pendudukController.index)
router.post("/tambah", pendudukController.add)
router.delete("/hapus/:id", pendudukController.delete)
router.put("/update/:id", pendudukController.update)

module.exports = router