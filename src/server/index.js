const express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive');
        bin_ctrl = require('./controllers/bin-controller')

const app = express();
app.use(bodyParser.json());

const port = 4000;

const connectionString = 'postgres://azdriyqjvufgun:3848fdf0ef05242a0fda07aeb46e853b65ca517fb4c5b4c8a926808012e5d413@ec2-54-163-234-99.compute-1.amazonaws.com:5432/das3d6fo44f7rf?ssl=true';

app.get('/api/bins', bin_ctrl.getAll)
app.get('/api/bin/:id', bin_ctrl.getOne)
app.put('/api/bin/:id', bin_ctrl.update)
app.post('/api/bin', bin_ctrl.create)
app.delete('/api/bin/:id', bin_ctrl.delete)

massive(connectionString).then(db => {
    app.set('db', db);
    app.listen(port, () => {console.log(`Server is listening on port ${port}`)})
})