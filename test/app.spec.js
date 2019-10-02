const app = require('../src/app')
const store = require('../src/store')

describe('GC2019 Itinerary Endpoints Testing', () => {

  it('Check basic access to server, should require authorization - GET /', ()=> {
    return supertest(app)
    .get('/')
    .expect(401);
  });

  it('Check basic access to server - GET /', ()=> {
    return supertest(app)
    .get('/')
    .set('Authorization', 'Bearer ' + '910237e9-95fd-4ecf-b17b-4af6605a1f01')
    .expect(200, "Welcome to the default endpoint for ocsa-api-server");
  });

  it('Gets the itinerary from the  GC store - GET /itinerary', () => {
    return supertest(app)
      .get('/gcapi/itinerary')
      .set('Authorization', 'Bearer ' + '910237e9-95fd-4ecf-b17b-4af6605a1f01')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
      });
  });

  it('Check access to add comments - POST /comments/add', ()=> {
    return supertest(app)
    .post('/gcapi/comments/add')
    .set('Authorization', 'Bearer ' + '910237e9-95fd-4ecf-b17b-4af6605a1f01')
    .expect(200);
  });

})
