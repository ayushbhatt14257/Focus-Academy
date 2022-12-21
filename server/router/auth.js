const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
// const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate')
const cookieParser = require('cookie-parser');
router.use(cookieParser())

require('../db/conn')
const User = require('../model/userschema');



router.post('/register', async(req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ errow: "Please fill all the input field now" })
    }

    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: `Email already exist` })

        } else if (password != cpassword) {
            return res.status(422).json({ error: `Password is not matching` })

        } else {
            const user = new User({ name, email, phone, work, password, cpassword })
            await user.save();
            res.status(201).json({ message: `user register successfuly` })

        }

    } catch (error) {
        console.log(error);
    }
})


router.post('/login', async(req, res) => {
    try {
        let token;

        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ errow: "Please fill " })
        }
        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatching = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();

            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 258920000),
                httpOnly: true
            });

            if (!isMatching) {
                res.status(400).json({ errow: "Invalid Login Details" })

            } else {
                res.json({ message: 'User Signin Sccessfully' });
            }
        } else {

            res.status(400).json({ errow: "Invalid Login Details" })
        }

    } catch (error) {
        console.log(error);
    }

});

router.get('/user', authenticate, (req, res) => {
    console.log('Hello my about');
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwttoken', { path: '/' });
    res.status(200).send(req.rootUser);
    console.log('Hello my logout');
});

module.exports = router