require('dotenv').config();

const app = require('./server');
require('./database');

app.listen(app.get('port'),()=>{
    console.log('server on port ' + app.get('port'))
})

//https://www.youtube.com/watch?v=htlt7L8Yl1k&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=12