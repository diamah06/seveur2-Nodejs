const request = require('supertest');
const app = require('../app');

describe('GET /api/user/currentUser', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/api/user/currentUser')
      .expect('Content-Type', /json/)
      .expect(401);
  })
});

describe('GET /api/user/currentUser', () => {
    it('should return a 401 error', async () => {
      const res = await request(app)
        .get('/api/user/currentUser')
        .set(
            'Authorization', 
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQHRlc3QuY29tIiwiaWQiOjEyLCJpYXQiOjE2OTU5MDk4MDAsImV4cCI6MTY5NTkxMzQwMH0.MZvgDYl9pNn5nSSEOgYm9Ol3TnDAUZZXDLcujkcxNow'
            )
            .expect('Content-Type', /json/)
            .expect(200)
    })
  });

  describe('POST /signup', () => {
    it('should not allow signup with existing email', async () => {
      // Essayez de créer un compte avec une adresse e-mail existante
      const res = await request(app)
        .post('/auth/signup')
        .expect('Content-Type', /json/)
        .send({
          email: 'email@example.com',
          password: 'password'
        });
  
      // Vérifiez que la réponse est un code d'erreur 400
      expect(res.status).toBe(400);
  
      // Vérifiez que le message d'erreur indique que l'adresse e-mail est déjà utilisée
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toMatch(/email already in use/);
    });
  });