let chai = require('chai');
let chaiHttp = require('chai-http');
const {expect} = require("chai");

chai.use(chaiHttp);

describe('GestureCorrectRequests', () => {
    let id;
    it("postGesture", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/gestures')
            .send({
                "name": "gestureName",
                "startTime": "2024-08-09T16:59:01.004Z",
                "endTime": "2024-08-09T16:59:01.004Z",
                "positions": {
                    "position0": {
                        "xCoordinate": 2,
                        "yCoordinate": 0,
                        "zCoordinate": 1
                    },
                    "position1": {
                        "xCoordinate": 3,
                        "yCoordinate": 2,
                        "zCoordinate": 5
                    },
                    "position2": {
                        "xCoordinate": 4,
                        "yCoordinate": 3,
                        "zCoordinate": 4
                    },
                    "position3": {
                        "xCoordinate": 5,
                        "yCoordinate": 2,
                        "zCoordinate": 0
                    }
                }
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                id = res.body._id;
                done();
            });

    });

    it("getGestures", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/gestures')
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it("putGesture", (done) => {
        chai.request('http://localhost:3000')
            .put('/api/gestures/' + id)
            .send ({name: "anotherName"})
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.name = "anotherName")
                done();
            });
    });

    it("deleteGesture", (done) => {
        chai.request('http://localhost:3000')
            .delete('/api/gestures/'  + id)
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
})

describe('GestureWrongRequests', () => {
    it("postGestureWithoutName", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/gestures')
            .send({
                "name": "",
                "startTime": "2024-08-09T16:59:01.004Z",
                "endTime": "2024-08-09T16:59:01.004Z",
                "positions": {
                    "position0": {
                        "xCoordinate": 2,
                        "yCoordinate": 0,
                        "zCoordinate": 1
                    },
                    "position1": {
                        "xCoordinate": 3,
                        "yCoordinate": 2,
                        "zCoordinate": 5
                    },
                    "position2": {
                        "xCoordinate": 4,
                        "yCoordinate": 3,
                        "zCoordinate": 4
                    },
                    "position3": {
                        "xCoordinate": 5,
                        "yCoordinate": 2,
                        "zCoordinate": 0
                    }
                }
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                expect(res).to.be.json;
                done();
            });

    });

    it("getGesturesWrongURL", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/gestus')
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                done();
            });
    });

    it("putGestureWrongId", (done) => {
        chai.request('http://localhost:3000')
            .put('/api/gestures/12345')
            .send ({name: "anotherName"})
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                expect(res).to.be.json;
                expect(res.body.name = "anotherName")
                done();
            });
    });

    it("deleteGesture", (done) => {
        chai.request('http://localhost:3000')
            .delete('/api/gestures/54321')
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                done();
            });
    });
})


describe('AnalysisCorrectRequests', () => {
    let id;
    let id2;
    it("postAnalysis", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/analysis')
            .send({
                "name": "swipe",
                "predictions": [
                    {
                        "name": "Rotate Clockwise",
                        "value": 8
                    },
                    {
                        "name": "Wave",
                        "value": 6
                    },
                    {
                        "name": "Point",
                        "value": 3
                    }
                ],
                "startTime": "2024-08-09T16:59:01.004Z",
                "endTime": "2024-08-09T16:59:01.004Z",
                "duration": 1.102
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                id = res.body._id;
                done();
            });

    });

    it("postAnalysisWithoutPredictions", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/analysis')
            .send({
                "name": "noGesture",
                "predictions": [

                ],
                "startTime": "2024-08-09T16:59:01.004Z",
                "endTime": "2024-08-09T16:59:01.004Z",
                "duration": 1.112
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                id2 = res.body._id;
                done();
            });

    });

    it("getAnalyses", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/analysis')
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it("getAnalysis", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/analysis/' + id)
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it("deleteAnalysis", (done) => {
        chai.request('http://localhost:3000')
            .delete('/api/analysis/'  + id)
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it("deleteSecondAnalysis", (done) => {
        chai.request('http://localhost:3000')
            .delete('/api/analysis/'  + id2)
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
})


describe('AnalysisWrongRequests', () => {
    let id;
    it("postAnalysisNoTime", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/analysis')
            .send({
                "name": "swipe",
                "predictions": [
                    {
                        "name": "Rotate Clockwise",
                        "value": 8
                    },
                    {
                        "name": "Wave",
                        "value": 6
                    },
                    {
                        "name": "Point",
                        "value": 3
                    }
                ],
                "startTime": "",
                "endTime": "",
                "duration": 1.102
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                expect(res).to.be.json;
                id = res.body._id;
                done();
            });

    });

    it("postCorrectAnalysis", (done) => {
        chai.request('http://localhost:3000')
            .post('/api/analysis')
            .send({
                "name": "swipe",
                "predictions": [
                    {
                        "name": "Rotate Clockwise",
                        "value": 8
                    },
                    {
                        "name": "Wave",
                        "value": 6
                    },
                    {
                        "name": "Point",
                        "value": 3
                    }
                ],
                "startTime": "2024-08-09T16:59:01.004Z",
                "endTime": "2024-08-09T16:59:01.004Z",
                "duration": 1.102
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.duration).to.be.not.undefined;
                id = res.body._id;
                done();
            });

    });


    it("getAnalysisWithWrongURL", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/gestures/1' + id)
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(500);
                expect(res).to.be.json;
                done();
            });
    });

    it("deleteGesture", (done) => {
        chai.request('http://localhost:3000')
            .delete('/api/analysis/'  + id)
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });
})