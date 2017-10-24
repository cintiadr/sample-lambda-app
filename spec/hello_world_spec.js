var request = require("request");

var base_url = "https://" + process.env.ENVIRONMENT + ".cintia.me"

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + "/", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("The actual hello world, as expected.");
        done();
      });
    });
  });

  describe("GET /healthcheck", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns healthy kale", function(done) {
      request.get(base_url + "/healthcheck", function(error, response, body) {
        expect(body).toBe("Super healthy Kale!");
        done();
      });
    });
  });

  describe("GET /metadata", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    // it("returns healthy kale", function(done) {
    //   request.get(base_url + "/healthcheck", function(error, response, body) {
    //     expect(body).toBe("Super healthy Kale!");
    //     done();
    //   });
    // });
  });

});
