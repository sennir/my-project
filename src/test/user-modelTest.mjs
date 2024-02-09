import chai from 'chai';
import { listAllUsers } from '../models/user-model.mjs';

describe('User Model Integration Tests', function() {
  it('should fetch all users from the database', async function() {
    try {
      // Fetch users from the database
      const users = await listAllUsers();

      // Assert that the returned value is an array
      chai.expect(users).to.be.an('array');

      // Assert that the returned array is not empty
      chai.expect(users).to.have.length.greaterThan(0);
    } catch (error) {
      // Handle any errors that might occur during database access
      // For example, log the error or fail the test
      console.error('Error fetching users:', error);
      throw error; // This will fail the test if an error occurs
    }
  });
});
