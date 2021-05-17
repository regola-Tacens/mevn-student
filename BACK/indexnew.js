const bodyParser = require('body-parser')
let express = require ('express')
cors = require('cors')
mongoose = require('mongoose')
database = require('./database')
bodyparser = require('body-parser')


//connect mongoDB
mongoose.Promise = global.Promise

mongoose.connect(database.db, {
    useNewUrlParser : true,
    useUnifiedTypology : true
}).then(()=> {
    console.log("database connected")
    },
    error => {
        console.log("database could not be connected tp :", error)
    }
)

const studentAPI = require('./routes/studentRoute')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : false
}))
app.use(cors())

//API
app.use('/api', studentAPI)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});