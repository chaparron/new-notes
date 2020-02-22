const {Schema, model} = require('mongoose');

const NoteSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    }
},
    {timestamps: true} //Crea los campos de creado y editado automáticamente
)

module.exports = model('Note', NoteSchema);