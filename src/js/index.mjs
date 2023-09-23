export const BASE_URL = "https://nf-api.onrender.com/api/v1/auction/";
console.log(BASE_URL)

import * as router from "../js/router/searchParams.mjs";
import * as listeners from "../listeners/index.mjs";
import * as listings from "../listing/index.mjs";
import * as profiledata from "../api/profile/index.mjs";

// router.setSearchParams();




listeners.setLoginFormListener();

listeners.setRegisterListener();

listeners.setUpdateProfileFormListener();



listeners.setBidFormListener();
listeners.setCreateListingListener();
listeners.setLogoutFormListener();
listeners.setSearchFormListener();


listings.allListings();

listings.listingById();

profiledata.profileData();
