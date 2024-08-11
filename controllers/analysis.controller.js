const Analysis = require("../models/analysis.model");
const getAllAnalysis =  async (req, res) => {
    try {
        const gestures = await Analysis.find({});
        res.status(200).json(gestures);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getAnalysis = async (req, res) => {
    try{
        const {id} = req.params;
        const gesture = await Analysis.findById(id);
        res.status(200).json(gesture);
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
};

const createAnalysis = async (req, res) => {
    console.log(req.body);
    try {
        const gesture = await Analysis.create(req.body);
        res.status(200).json(gesture);
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}


const deleteAnalysis = async (req, res) => {
    try {
        const {id} = req.params;
        const gesture = await Analysis.findByIdAndDelete(id);
        if (!gesture){
            return res.status(404).json({message: "Analysis not found"});
        }
        res.status(200).json({message: "Analysis deleted successfully"});
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAllAnalysis,
    getAnalysis,
    createAnalysis,
    deleteAnalysis
};