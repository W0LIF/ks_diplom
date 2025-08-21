// import functions from User model

import {
    getAllUser,
    getUserByEmail,
    insertUser
} from "../models/UserModel.js";
import mailer from "../nodemailer.cjs";
// const mailer = require('./../nodemailer.cjs')

// get all Users
export const allUsers=(req,res)=>{
    getAllUser((err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};


// get single user
export const showAUser = (req,res)=>{
    getUserByEmail(req.params.email,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};

// create user
export const createAccount=(req,res)=>{
    const data = req.body;
    insertUser(data,(err,results)=> {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
            const message = {
                to: req.body.user_email,
                subject: 'Поздравляем! Вы успешно зарегистрировались на нашем сайте',
                html: `<h2>Поздравляем, вы успешно зарегистрировались на нашем сайте!</h2>` +
                    `` +
                    `<i>данные вашей учётной записи:</i>` +
                    `<ul>
                    <li>login : ${req.body.user_email}</li>
                    <li>password: ${req.body.user_password}</li>
                    </ul>
                    <p>Данное письмо не требует ответа</p>`
            }
            mailer(message)
        }
    });
};




