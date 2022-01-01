import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_gFhVKpqUi',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '6d9iagv32ecbogp7s7gu3plpcf',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol

        // OPTIONAL - customized storage object
        //storage: MyStorage,
        
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        clientMetadata: { myCustomKey: 'myCustomValue' },

         // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'https://focustime.auth.us-east-2.amazoncognito.com',
            scope: ['email', 'profile', 'openid'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});

// You can get the current config object
const currentConfig = Auth.configure();

export default currentConfig;