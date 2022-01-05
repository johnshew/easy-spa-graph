const msalConfig = {
    auth: {
        clientId: '16fa985a-217c-4fbf-be68-fc8aa85532e5',
        redirectUri: 'https://red-sand-0297fd91e.azurestaticapps.net',
    }
};
const msalRequest = {
    scopes: [
        'user.read',
        'mailboxsettings.read',
        'calendars.readwrite'
    ]
};

const msalClient = new msal.PublicClientApplication(msalConfig);
const account = msalClient.getActiveAccount();
console.log(JSON.stringify(account, null, 2));

async function signIn() {
    // Login
    try {
        const authResult = await msalClient.loginPopup(msalRequest);
        console.log('id_token acquired');
        msalClient.setActiveAccount(authResult.account);
    } catch (error) {
        console.log(error);
    }
}
function signOut() {
    msalClient.logout();
}
