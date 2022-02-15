'use strict'

const db = require('../db')

module.exports = {
    index : (req,res) => {
        const sql = 'select * from data_penduduk'
        db.query(sql, (err, result) => {
            if(err) {
                throw err
            }
            res.json({
                message : "berhasil",
                data: result
            })
        })
    },
    add : (req,res) => {
        let data = {
            nama : req.body.nama,
            alamat : req.body.alamat
        }
        let sql = "insert into data_penduduk SET ?";
        if(data.alamat && data.nama){
            db.query(sql, data, (err) => {
                if(err){
                    throw err
                } else {
                    res.json({
                        message : "sukses menambahkan",
                        data
                    })
                }
            })
        }
    },

    delete: (req, res) => {
        let id = req.params.id;
        let data;
        if(id){
            let sql = "SELECT * from data_penduduk where id = ?"
            db.query(sql, [id], (err,result) => {
                if(err){
                    throw err;
                }else{
                    data = result;
                }
            })
        }
        if(id){
            let sql = "DELETE from data_penduduk where id = ?";
            db.query(sql, id, (err) => {
                if (err){
                    throw err
                }else{
                    res.json({
                        message: `ID ${id} deleted.`,
                        data: data[0]
                    })
                }
            })
        }
    },
    update : (req, res) => {
        const id = req.params.id
        let penduduk = {
            nama: req.body.nama,
            alamat: req.body.alamat
        }
        db.query(`update data_penduduk set ? where id = '${id}'`, penduduk, (err, results) => {
            let response = null
            if (err) {
                response = {
                    message: err.message
                }
            } else {
                res.send({
                    message: "Berhasil Update Data",
                    data: results
                })
            }
        })
    }
    }
