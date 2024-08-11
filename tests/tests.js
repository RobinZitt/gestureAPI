let chai = require('chai');
let chaiHttp = require('chai-http');
const {expect} = require("chai");
let app = require('../app')
const {destroy} = require("mocha/mocha");

chai.use(chaiHttp);

describe('Return correct status code', () => {
    it("getGesture", (done) => {
        chai.request('http://localhost:3000')
            .get('/api/gestures/66b4db6277dcea9863dd473e')
            .end((err, res) =>{
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                console.log(res.body._id);
                done();
            });
    });

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
                chai.request('http://localhost:3000')
                    .delete('/api/gestures/' + res.body._id)
                    .end((err, res) =>{
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                    });
                done();
            });

    });
})