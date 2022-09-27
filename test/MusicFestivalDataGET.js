var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
const async = require('async');
var urlBase = "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals";
describe("MusicFestival GET API Automation",function(){
    it("Should return 200 Success Code",function(done){
      request.get(
        {
          url : urlBase
        },
        function(success, response, body){
          // convert the response to json
          var _body = {};
          try{
            _body = JSON.parse(body);
          }
          catch(e){
            _body = {};
          }
          expect(response.statusCode).to.equal(200);
          console.log(response.body)
          done();
        }
      );
    });

    it("Should return MusicFestival Band Names",function(done){
      request.get(
        {
          url : urlBase
        },
        function(success, response, body){
          // convert the response to json
          var _body = {};
          try{
            _body = JSON.parse(body);
          }
          catch(e){
            _body = {};
          }
          expect(response.statusCode).to.equal(200);
          console.log(response.body)
          var data = response.body;
          JSON.parse(data, function(key, value) {
            console.log(key, "=>", value);
            return value;
          });
          done();
        }
      );
    });

    it("Checking for Throttled / Status Code 429",function(done){

        
        function httpGet(url, callback) {
          const options = {
            url :  url,
            json : true
          };
          request(options,
            function(err, res, body) {
              callback(err, body);
            }
          );
        }
        
        const urls= [
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals",
          "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals"
        ];
        
        async.map(urls, httpGet, function (err, res){
          if (err) return console.log(err);
          console.log(res);
        });
        //expect(response.statusCode).to.equal(429);
        //console.log(response.body)
        let res;
        if (res.statusCode == 200) {
            expect(res.statusCode).to.equal(200);
        console.log(res.body)
        }
        else {
            expect(res.statusCode.to.equal(429));
        console.log(res.body)
    }
        done();

    });

      });
