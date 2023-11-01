export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

export const LOGO_URL = "https://cdn.worldvectorlogo.com/logos/swiggy-1.svg";

export const EMPTY_CART_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0";

export const MENU_API_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3670355&lng=79.4304381&restaurantId=";

export const MENU_ITEM_IMAGE_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

export const SEARCH_IMG_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png";

export const GPS_IMG_URL =
  "https://cdn-icons-png.flaticon.com/512/6618/6618280.png";

export const CART_IMG_URL =
  "https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3041-thumb.png";

export const LOCATION_UNSERVICEABLE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png";

export const SEARCH_LOCATION_API_URL =
  "https://api.locationiq.com/v1/autocomplete?key=pk.52edb4951867ed3df1b858c24daeae0f&q=";

export const getAllRestaurantAPI = (lat, lng) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

export const getCurrentLocationAPI = (lat, lng) =>
  `https://us1.locationiq.com/v1/reverse?key=pk.52edb4951867ed3df1b858c24daeae0f&lat=${lat}&lon=${lng}&format=json`;
