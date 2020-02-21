const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique: true},
    password:{type:String, required: true}

},
{timestamps: true}
);
//ciframos la contraseña
UserSchema.methods.encryptPassword = async password =>{ //encryptPassword es el nombre que le damos nosotros a la función
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt);
}
//devuelve true si la contraseña o false si es incorrecta
UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', UserSchema)