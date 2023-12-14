const { response } = require('express');
const axiosInstance = require('../helper/axiosInstance')

exports.createSoal = async (req,res) => {
    try {
        if(req.user.role == 'admin'){
        axiosInstance.post('http://localhost:3012/api/soal/',{
            token: {
                userID: req.user.sub,
                role: req.user.role,
            },
            data: req.body
        })
        .then((response) => {
            res.send( response.data);
          })
          .catch((error) => {
            res.send( error);
          });
        }else{
            res.status(403).json({
                success: false, 
                message: 'access denied only for admins'
            });
        };
    } catch (err) {
        res.status(500).json({success:false, message: 'Error creating soal', error: error.message });
    }
};

exports.listSoal = async (req,res) =>{
    try {
        axiosInstance.get('http://localhost:3012/api/soal/', req.query)
        .then((response) => {
            res.send( response.data);
        })
        .catch((error) => {
            res.send( error);
        });
    
    } catch (err) {
        res.status(500).json({success:false, message: 'Error creating soal', error: error.message });
    }
};

exports.getSoal = async (req, res) => {
    try {
        axiosInstance.get('http://localhost:3012/api/soal/:id')
        .then((response) => {
            res.send( response.data);
        })
        .catch((error) => {
            res.send( error);
        });
    } catch (err) {
        res.status(500).json({success:false, message: 'Error creating soal', error: error.message });
    }
};

exports.editSoal = async (req,res) => {
    try {
        if(req.user.role == 'admin'){
        axiosInstance.put('http://localhost:3012/api/soal/:id',{
            id: req.parms.id, 
            data: req.body
        })
        .then((response) => {
            res.send( response.data);
          })
          .catch((error) => {
            res.send( error);
          });
        }else{
            res.status(403).json({
                success: false, 
                message: 'access denied only for admins'
            });
        };
    } catch (err) {
        res.status(500).json({success:false, message: 'Error creating soal', error: error.message });
    }
};

exports.deleteSoal = async (req,res) => {
    try {
        if(req.user.role == 'admin'){
        axiosInstance.delete('http://localhost:3012/api/soal/:id')
        .then((response) => {
            res.send( response.data);
          })
          .catch((error) => {
            res.send( error);
          });
        }else{
            res.status(403).json({
                success: false, 
                message: 'access denied only for admins'
            });
        };
    } catch (err) {
        res.status(500).json({success:false, message: 'Error creating soal', error: error.message });
    }
};