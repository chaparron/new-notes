const usersCtrl = {};
const User = require('../models/User');
const passport = require('passport');

usersCtrl.renderSignUpForm = (req,res) => {
    res.render('users/signup')
}
usersCtrl.signUp = async (req,res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password){
        errors.push({ text: 'passwords do not match' });
    }
    if (password.length < 4){
        errors.push({ text: 'password must have more than 4 characters'})
    }
    if ( errors.length > 0 ){
        res.render('users/signup', 
        { errors,
        name,
        email,
        password,
        confirm_password }
        )
    } else {
        const email_user = await User.findOne({email: email});
        if (email_user) {
            // Creo un nuevo error para mantener los campos, Fazt lo hace con flash
            // req.flash("success_msg", "The Email is already in use.");
            // res.render("users/signup");

            error_msg = "The Email is already in use."
            res.render('users/signup', 
            { error_msg,
            name,
            email,
            password,
            confirm_password })
        } else {
            const newUser = new User({ name, email, password })
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            req.flash('success_msg', 'Usuario guardado correctamente')
            res.redirect('/users/signin')
        }
    }
}
usersCtrl.renderSignInForm = (req,res) => {
    res.render('users/signin')
}
usersCtrl.signIn = passport.authenticate('local',{
    failureRedirect: '/users/signin',
    successRedirect:'/notes',
    failureFlash: true
})

usersCtrl.logOut = (req,res) => {
    //req.session.user = null //pero passport ya lo hace
    req.logOut();
    req.flash('success_msg', 'You are successfully log out, hope to see you soon');
    res.redirect('/users/signin');
}

module.exports = usersCtrl;