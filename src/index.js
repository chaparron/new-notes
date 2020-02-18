require('dotenv').config();

const app = require('./server');
require('./database');

app.listen(app.get('port'),()=>{
    console.log('server on port ' + app.get('port'))
})

//https://www.youtube.com/watch?v=PQL_iwLKnRg&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=14  1:07