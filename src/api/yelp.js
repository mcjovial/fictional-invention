import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer bN-3QdDOA3DnSfwerViQ1BFM5latyAWgSzwSSSPaIcsUAWBKe9BRBy2ORLtdxz_gF4HpVWMxUQ-f-zqYiAVpMAQwyd7T3LA9Z_oj7YqG3fYDRdbCuNOj5ylgZa7CYnYx",
  },
});


// Client ID
// FenRRp3D4chER6icoCNS8g

// API Key
// bN-3QdDOA3DnSfwerViQ1BFM5latyAWgSzwSSSPaIcsUAWBKe9BRBy2ORLtdxz_gF4HpVWMxUQ-f-zqYiAVpMAQwyd7T3LA9Z_oj7YqG3fYDRdbCuNOj5ylgZa7CYnYx