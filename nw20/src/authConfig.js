export const msalConfig = {
    auth: {
        clientId: "6e8ac70e-90b1-426e-ada3-c1fa40aa0b6d",
        authority: "https://login.microsoftonline.com/6d52e229-7b09-4772-885e-edd85950a304",
        redirectUri: "http://localhost:61536/",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

export const loginRequest = {
    scopes: ["User.Read"], // Microsoft Graph scope for profile info
};




