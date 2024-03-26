import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    address:{
        type: String,
        required: [true,'Please add a address']
    },
    tel:{
        type: String,
    },
    opentime:{
        type: String,
        required: [true,'Please add a restaurant opening time']
    },
    closetime:{
        type: String,
        required: [true,'Please add a restaurant closing time']
    }
});

const Restaurant = mongoose.models.Restaurant || mongoose.model("Restaurant" , RestaurantSchema)
export default Restaurant