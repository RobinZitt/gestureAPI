const mongoose = require('mongoose');

const AnalysisSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        predictions: {
            type: Array,
            required: true,
        },
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        duration: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Analysis = mongoose.model('Analysis', AnalysisSchema);

module.exports = Analysis;