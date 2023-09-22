import * as listeners from "../listeners/index.mjs";
import * as listings from "../listing/index.mjs";
import * as profiledata from "../api/profile/index.mjs";



const path = location.pathname;

if (path === '/profile/login'){
    listeners.setLoginFormListener();
} else if( path === '/profile/register'){
    listeners.setRegisterListener();
} else if(path === '/profile/edit/'){
    listeners.setUpdateProfileFormListener();
} else if(path === ''){

}



listeners.setBidFormListener();

listeners.setCreateListingListener();

listeners.setLogoutFormListener();

listeners.setSearchFormListener();



listings.allListings();

listings.listingById();

profiledata.profileData();
