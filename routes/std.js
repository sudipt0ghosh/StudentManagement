const express = require('express');
const stdController = require('../controllers/std');

// const app = express();
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

const router = express.Router();

//routers for routing request crud
router.get('/', stdController.getAllstd);
router.post('/',stdController.poststd);
router.put('/', stdController.putstd);
router.delete('/:id', stdController.deletestd);

module.exports = router;