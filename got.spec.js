let request = require("request");

let base_url = "http://localhost:3000/characters"

describe("GET /characters", function() {

    // check that server is up and responses to /characters
    it("API returns status code 200", function(done) {
        request.get(base_url, function(error, response, body) {
          expect(response.statusCode).toBe(200);
          done();
        });
    });

    it("API Response should be valid json", function(done) {
      request.get(base_url, function(error, response, body) {
          expect(() => {
              JSON.parse(body);
          }).not.toThrow();
          done();
      });
    });    

    // example of parsed body (i.e. converted to a JSON object because body is a string)
    it("Sansa has ID 300 and belongs to Stark house", function(done) {
      request.get(base_url + '/300', function(error, response, body) {
        let parsed_body = JSON.parse(body);

        // uncomment the next line to see the parsed body
        // console.log(parsed_body); 
        expect(parsed_body.name).toBe('Sansa Stark');
        expect(parsed_body.house).toBe('Stark');
        done();
      });
    });

    it("Jon Snow belongs to two houses (Stark and Targaryen) and does not have nickname", function(done) {
      request.get(base_url + '/123', function(error, response, body) {
        let parsed_body = JSON.parse(body);

        expect(parsed_body.name).toBe('Jon Snow');
        expect(parsed_body.house.length).toBe(2);
        expect(parsed_body.nick).toBe(null);
        done();
      });
    });

    it("Filter by house name ( ?house=Stark ) works, there are 20 Starks", function(done) {
      request.get(base_url + '?house=Stark', function(error, response, body) {
        let parsed_body = JSON.parse(body);
        expect(parsed_body.length).toBe(20);
        done();
      });
    });    
});
 
