const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
require('dotenv').config();

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const client = new PlaidApi(configuration);
// Simple test function to fetch institution data
async function testInstitutions() {
    try {
      const response = await client.institutionsGet({
        count: 10,
        offset: 0,
        country_codes: ['US']
      });
      console.log('Institutions fetched successfully:', response.data);
    } catch (error) {
      console.error('Failed to fetch institutions:', error);
    }
  }
  
  //testInstitutions();  Run the test function when this file is executed
  
  module.exports = client;