import mongoose, { Schema, Document } from 'mongoose';

export interface IImage extends Document {
    public_id: String,
    url: String
}

export interface IReview extends Document {
    user: IDBRequestReadyState,
    rating: number,
    comment:string,
}

export interface ILocation {
    type: string;
    coordinates: number[];
    formattedAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export interface IRoom extends Document {
    name: string;
    description: string;
    pricePerNight: number;
    address: string;
    location:ILocation;
    guestCapacity: number;
    numOfbeds: number;
    isInternet: boolean;
    isAirConditioned: boolean;
    isBreakfast: boolean;
    isPetsAllowed: boolean;
    isRoomCleaning: boolean;
    rating: Number;
    numOfReviews: Number;
    images: IImage[];
    category: string;
    reviews: IReview[];
    user: mongoose.Schema.Types.ObjectId;
    createdAt: Date;

}


const roomSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter room name"],
        trim: true,
        maxLength: [200, "Room name cannot exceed 100 characters"],
    },
    description: {
        type: String,
        required: [true, "Please enter room proce per night"],
    
    },
    pricePerNight: {
        type: Number,
        required: [true, "please enter toom address"],
    },
    address: {
        type: String,
        required: [true, "Please enter room address"],
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
        },

        coordinates: {
            type: [Number],
            index: "sdsphere",
        },

        formattedAddress: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
    },


    guestCapacity: {
        type: Number,
        required: [true, "Please enter room guest capacity"],
    },
    numOfBeds: {
        type: Number,
        required: [true, "Please enter room guest capacity"],
    },
    isInternet: {
        type: Boolean,
        default: false,
    },
    isAirConditioned: {
        type: Boolean,
        default: false,
    },
    isBreakfast: {
        type: Boolean,
        default: false,
    },
    isPetsAllowed: {
        type: Boolean,
        default: false,
    },
    isRoomCleaning: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],

    category: {
        type: String,
        required: [true, 'Please enter room category'],
        enum: {
            values: ['King', 'Single', 'Twins'],
            message: "Please select correct catefory for room",
        },
    },

    reviews: [
        {
            user: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.models.Room || 
mongoose.model<IRoom>("Room", roomSchema);