import { usePlaidLink } from 'react-plaid-link';

const PlaidLinkButton = ({ token }) => {
  const onSuccess = (publicToken, metadata) => {
    // send publicToken to server
  };
  
  const config = {
    token,
    onSuccess,
    // Add other configuration options here
  };
  
  const { open, ready } = usePlaidLink(config);

  return <button onClick={() => open()} disabled={!ready}>Link Bank Account</button>;
};

export default PlaidLinkButton