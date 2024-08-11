let chai = require('chai');
let chaiHttp = require('chai-http');
const {expect} = require("chai");

chai.use(chaiHttp);

describe('Return correct status code', () => {
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