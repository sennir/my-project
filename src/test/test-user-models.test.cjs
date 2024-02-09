// Jestin kanssa integraatiotesti
const { listAllUsers } = require('../models/user-model.mjs');

describe('User Model Tests', () => {
  it('should list all users', async () => {
    const users = await listAllUsers();
    expect(users).toBeDefined();
    expect(users.length).toBeGreaterThan(0);
    // Lisää tarkistuksia tarpeen mukaan
  });
});
