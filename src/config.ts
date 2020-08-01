// @ts-ignore
let host_url = global.location.host;
let host_var = 'DEV';

if (host_url === process.env.REACT_APP_PROD_SERVER) {
  host_var = 'PROD';
} else if (host_url === process.env.REACT_APP_DEV_SERVER) {
  host_var = 'DEV';
}

export default {
  env: host_var,
  stripe_pub_key: process.env[`REACT_APP_${host_var}_STRIPE_PUB_KEY`],
  api_url: process.env[`REACT_APP_${host_var}_API_URL`]
};
