import { Request, Response } from "express";
const { Router } = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const router = Router();

router.post(
    '/register',
    [
        check('email', 'Invalid email address').isEmail(),
        check('password', 'It mast be at least 6 symbols').isLength({min: 6})
    ],
    async(req: Request, res: Response) => {
        try{
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Invalid registration data'
                })
            }

            const {email, password} = req.body;

            const candidate = await User.findOne({email});

            if(candidate){
                return res.status(400).json({message: 'The user is already exist'});
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({email, password: hashedPassword});

            await user.save();

            res.status(201).json({message: 'New user created'});
        } catch(e){
            res.status(500).json({message: 'Something went wrong, try again'});
        }
});

router.post(
    '/login',
    [
        check('email', 'Enter a valid email address').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
    ],
    async(req: Request, res: Response) => {
        try{
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Invalid login data'
                })
            }

            const {email, password} = req.body;

            const user = await User.findOne({email});

            if(!user){
                return res.status(400).json({message: 'Invalid email or password, try again'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res.status(400).json({message: 'Invalid email or password, try again'});
            }

            const token = jwt.sign(
                {userId: user.id},
                'javascript mentoring program',
                {expiresIn: '1h'}
            )

        } catch(e){
            res.status(500).json({message: 'Something went wrong, try again'});
        }
});

module.exports = router;