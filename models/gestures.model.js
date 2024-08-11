const mongoose = require('mongoose');

const GestureSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter gesture name'],
        },
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        positions: {
            type: Object,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Gesture = mongoose.model('Gesture', GestureSchema);

module.exports = Gesture;