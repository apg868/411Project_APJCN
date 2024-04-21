const plaid = require('plaid');
const client = require('./plaidclient');


//the result of this function being successful is a linktoken, which is used with plaid's library on the frontend
exports.createLinkTokenHandler = async function(request, response) {
    // Get the client_user_id by searching for the current user
    //const user = await User.find('Pio'); // Simulated user finding process, to be fixed with real data in future
    //const clientUserId = user.id; // Assuming 'user' has an 'id' property
    const clientUserId = 'user_good';

    // Renamed variable to avoid conflict with the 'request' parameter
    const plaidRequest = {
      user: {
        client_user_id: clientUserId,
      },
      client_name: 'Plaid Test App',
      products: ['auth'],
      language: 'en',
      webhook: 'https://webhook.example.com',
      country_codes: ['US'],
    };
    try {
      const createTokenResponse = await client.linkTokenCreate(plaidRequest);
      console.log("Link token created successfully", createTokenResponse.data);
      response.json(createTokenResponse.data);
    } catch (error) {
      console.error("Error creating link token:", error.response ? error.response.data : error.message);
      response.status(500).json({ error: error.message });
    }
};



exports.exchangePublicToken = async function(request, response) {
  const publicToken = request.body.public_token;
  console.log("Received public token:", publicToken); // Log to verify input
  try {
    const exchangeResponse = await client.itemPublicTokenExchange({
      public_token: publicToken,
    });
    const accessToken = exchangeResponse.data.access_token;
    const itemID = exchangeResponse.data.item_id;
    console.log(accessToken, "is your 6h+ access token to be stored in the DB!");
    response.json({ accessToken, itemID });
  } catch (error) {
    console.error("Error during public token exchange:", error.response ? error.response.data : error);
    response.status(500).json({ error: error.message || 'Unknown error during token exchange' });
  }
  
};



// exports.createLinkTokenHandler = async function(request, response) {
//   // Simulated response to mimic a successful creation of a link token
//   const simulatedResponse = {
//       link_token: "mock-link-token-123456789",  // Example token
//       expiration: new Date(new Date().getTime() + 30 * 60000).toISOString(), // Expires in 30 minutes
//       request_id: "mock-request-id-987654321"  // Example request ID
//   };

//   try {
//       // Simulate an asynchronous operation with a delay to mimic real API call
//       setTimeout(() => {
//           response.json(simulatedResponse);
//       }, 500);  // Delay response by 500 milliseconds
//   } catch (error) {
//       console.error("Error in creating link token:", error);
//       response.status(500).json({ error: "Failed to create link token" });
//   }
// };
