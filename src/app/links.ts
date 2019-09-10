// back-end
// export const mainLink = "http://localhost:8080/";
export const mainLink = 'https://greencitysoftserve.herokuapp.com/';

export const userOwnSecurityLink = mainLink + 'ownSecurity/';
export const userOwnSignUpLink = userOwnSecurityLink + 'signUp/';
export const userOwnSignInLink = userOwnSecurityLink + 'signIn/';
export const updateAccessTokenLink = userOwnSecurityLink + 'updateAccessToken/';
export const categoryLink = mainLink + 'category/';
export const userLink = mainLink + 'user/';
export const placeLink = mainLink + 'place/';
export const favoritePlaceLink = mainLink + 'favorite_place/';

// front-end
// export const frontMailLink = 'https://localhost:4200/';
export const frontMailLink = 'https://greencityclient.herokuapp.com/';
export const frontAuthLink = frontMailLink + 'auth/';
