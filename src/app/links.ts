// back-end
// export const mainLink = "http://localhost:8080/";
export const mainLink = 'https://greencitysoftserve.herokuapp.com/';

export const userOwnSecurityLink = mainLink + 'ownSecurity/';
export const userOwnSignUpLink = userOwnSecurityLink + 'signUp/';
export const userOwnSignInLink = userOwnSecurityLink + 'signIn/';
export const updateAccessTokenLink = userOwnSecurityLink + 'updateAccessToken/';
// front-end
// export const frontMailLink = 'https://localhost:4200/';
export const frontMailLink = 'https://greencityclient.herokuapp.com/';
export const frontAuthLink = frontMailLink + 'auth/';
