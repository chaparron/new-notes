const usersCtrl = {};

usersCtrl.renderSignUpForm = (req,res) => {
    res.render('users/signup')
}
usersCtrl.signUp = (req,res) => {
    res.send('signup')
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