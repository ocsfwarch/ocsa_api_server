const app = require('../src/app')
const store = require('../src/store')

describe('GC2019 Itinerary Endpoints Testing', () => {

  it('Check basic access to server - GET /', ()=> {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, world!');
  });

  it('Gets the itinerary from the store - GET /itinerary', () => {
    return supertest(app)
      .get('/itinerary')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
      })
  });

})
