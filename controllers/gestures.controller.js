const Gesture = require("../models/gestures.model");
const getGestures =  async (req, res) => {
    try {
        const gestures = await Gesture.find({});
        res.status(200).json(gestures);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getGesture = async (req, res) => {
    try{
        const {id} = req.params;
        const gesture = await Gesture.findById(id);
        res.status(200).json(gesture);
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
};

const createGesture = async (req, res) => {
    console.log(req.body);
    try {
        const gesture = await Gesture.create(req.body);
        res.status(200).json(gesture);
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

const updateGesture = async (req, res) => {
    try {
        const {id} = req.params;
        const gesture = await Gesture.findByIdAndUpdate(id, req.body);
        if (!gesture) {
            return res.status(404).json({message: "Gesture not found"});
        }
        const updatedGesture = await Gesture.findById(id);
        res.status(200).json(updatedGesture);
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
};

const deleteGesture = async (req, res) => {
    try {
        const {id} = req.params;
        const gesture = await Gesture.findByIdAndDelete(id);
        if (!gesture){
            return res.status(404).json({message: "Gesture not found"});
        }
        res.status(200).json({message: "Gesture deleted successfully"});
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getGestures,
    getGesture,
    createGesture,
    updateGesture,
    deleteGesture
};