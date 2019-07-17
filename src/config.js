// general config goes here
const configGlob = {};
// production specific config goes here
const configProd = {
  API_URI: "http://redtaleapi.herokuapp.com"
};
// development specific config goes here
const configDev = {
  API_URI: "http://localhost:8080"
};

// merged config
let conAddon = process.env.REACT_APP_NODE_ENV === 'production' ? {...configProd} : {...configDev}
const config = { ...configGlob, ...conAddon};
export default config;