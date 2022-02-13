const std = require('../models/std');

//controller for read data from database
exports.getAllstd = async (req, res, next)=>{
    try{
        const [allstd] = await std.fetchAll();
        res.status(200).json(allstd);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

//controller for write data to database
exports.poststd = async (req, res, next)=>{
    try{
        const postRes = await std.post(req.body.id, req.body.name, req.body.roll);
        res.status(201).json(postRes);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

//controller for edit data to database
exports.putstd = async (req, res, next)=>{
    try{
        const putRes = await std.update(req.body.id, req.body.name, req.body.roll);
        res.status(201).json(putRes);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};

//controller for remove data from database
exports.deletestd = async (req, res, next)=>{
    try{
        const deleteRes = await std.delete(req.params.id);
        res.status(201).json(deleteRes);
    } catch(err) {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    }
};