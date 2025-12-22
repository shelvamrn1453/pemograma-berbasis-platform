const express = require('express');
const {body, validationResult} = require('express-validator');
const joi = require('joi');

const app = express();
const port = 3000;

app.use(express.json());

//middleware untuk validasi input route menggunakan expess-validator
const validateInput = [
    body('username')
        .isLength({min: 5})
        .withMessage('panjang useername minimal 5 karakter'),
    body('email')
        .isEmail()
        .withMessage('format email tidak valid'),
];

//middleware untuk validasi input route menggunakan Joi
const validateInputJoi = (res,req, next) =>{
    const schema = joi.object({
        unername: Joi.string().min(5).required(),
        email: Joi.string().email().required(),
    });

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    next();
};

app.post('/user', validateInput, (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({error: errors.array()[0].msg});
    }

    res.json({message: 'data user valid'});
});

app.post('/user-joi', validateInputJoi, (req, res)=>{
    res.json({message: 'data user valid'});
});

app.listen(port, () =>{
    console.log(`server berjalan di http://localhost:${port}`);
});