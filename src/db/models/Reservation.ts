import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    reservationDate: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String
    },
    restaurant:{
        type: mongoose.Schema.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    time:{
        type: String
    },
    person:{
        type: Number
    },
    tel:{
        type: String
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

const Reservation = mongoose.models.Reservation || mongoose.model("Reservation" , ReservationSchema)
export default Reservation
