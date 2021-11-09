const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');

const GuestRoute = require('./route/GuestRoute');
const UserRoute = require('./route/UserRoute');
const ReservationRoute = require('./route/ReservationRoute');
const RoomRoute = require('./route/RoomRoute');
const EmployeeRoute = require('./route/EmployeeRoute');
const PaymentRoute = require('./route/PaymentRoute');

const app = express();
app.use(express.json({limit:'100mb'}));
app.use(cors())

const serverPort = process.env.SERVER_PORT ;

mongoose.connect(
    "mongodb://localhost:27017/hms",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        /*useFindAndModify: false,
        useCreateIndex: true*/
    }
).then(() => {
    app.listen(serverPort,()=>{
        console.log(`API Service Up And Running on ${serverPort}`)
    })
}).catch(error => {
    console.log(error);
});

app.use('/api/v1/guestRoute', GuestRoute);
app.use('/api/v1/userRoute', UserRoute);
app.use('/api/v1/reservationRoute', ReservationRoute);
app.use('/api/v1/roomRoute', RoomRoute);
app.use('/api/v1/employeeRoute', EmployeeRoute);
app.use('/api/v1/paymentRoute', PaymentRoute);