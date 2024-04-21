import React, { useState, useEffect, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import axios from 'axios';

const PlaidLinkUI = () => {
  const [linkToken, setLinkToken] = useState('');

  // Fetch link token from your backend
  const fetchLinkToken = useCallback(() => {
    axios.post('http://localhost:3001/plaidapi/create_link_token') // Adjusted URL
      .then(response => {
        setLinkToken(response.data.link_token); // Store the link token
      })
      .catch(error => console.error('Error fetching link token:', error));
  }, []);

  // Initialize Plaid Link on component mount
  useEffect(() => {
    fetchLinkToken();
  }, [fetchLinkToken]);

  const onSuccess = useCallback((publicToken, metadata) => {
    axios.post('http://localhost:3001/plaidapi/exchange_public_token', {
      public_token: publicToken,
    }).then(response => {
      console.log('Access Token and Item ID:', response.data);
    }).catch(error => {
      console.error('Error exchanging public token:', error);
    });
  }, []);
  

  const config = {
    token: linkToken,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <button onClick={() => open()} disabled={!ready || !linkToken}>
      Connect a bank account.
    </button>
  );
};

export default PlaidLinkUI;
