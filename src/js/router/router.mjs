import * as listeners from "../listeners/index.mjs";
import * as listings from "../listing/index.mjs";
import * as profiledata from "../api/profile/index.mjs";

listeners.setBidFormListener();

listeners.setCreateListingListener();

listeners.setLoginFormListener();

listeners.setLogoutFormListener();

listeners.setRegisterListener();

listeners.setSearchFormListener();

listeners.setUpdateProfileFormListener();


listings.allListings();

listings.listingById();

profiledata.profileData();
