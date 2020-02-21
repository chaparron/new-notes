const usersCtrl = {};
const User = require('../models/User');

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
            //Creo un nuevo error para mantener los campos, Fazt lo hace con flash
            //req.flash("error_msg", "The Email is already in use.");
            //res.redirect("/users/signup");
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
usersCtrl.signIn = (req,res) => {
    res.send('signin')
}
usersCtrl.logOut = (req,res) => {
    res.send('logout')
}

module.exports = usersCtrl;