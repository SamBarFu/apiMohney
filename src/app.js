const express = require('express');
const cors = require('cors');
const routes = require('./routes/route');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

const port = app.get('port');
const corsOptions = {
    origin: 'http://localhost:3050', 
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors());

//middlewares
app.use(express.json());

//routes
app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});