export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL = "https://cdn.worldvectorlogo.com/logos/swiggy-1.svg";

export const EMPTY_CART_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0";

export const MEDIA_ASSET_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

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

export const VEG_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png";

export const NON_VEG_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/1024px-Non_veg_symbol.svg.png";

export const FOOD_ICON =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r";

export const getAllRestaurantAPI = (lat, lng) =>
  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

export const getMenuAPIURL = (lat, lng, resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${resId}`;

export const getCurrentLocationAPI = (lat, lng) =>
  `https://us1.locationiq.com/v1/reverse?key=pk.52edb4951867ed3df1b858c24daeae0f&lat=${lat}&lon=${lng}&format=json`;
