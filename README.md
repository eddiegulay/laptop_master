# Realtime Website with Firebase Realtime DB

## Setting Firebase App

1. Go to the Firebase console and create a new account or sign in to your existing account.

2. Click the Add project button and enter a name for your project.

3. Select the Realtime Database checkbox and click the Continue button.

4. Choose a starting mode for your Realtime Database security rules:

   - Test mode: This mode allows anyone to read and write data to your database.
   
   - Strict mode: This mode only allows authenticated users to read and write data to your database.
   
   - Custom mode: This mode allows you to define your own security rules.

5. Click the Create project button.

6. Once your project has been created, you can start creating your Firebase Realtime Database app. To do this, follow these steps:

   - In the Firebase console, click the Realtime Database tab.

   - Click the Get started button.

   - Follow the instructions to add the Firebase Realtime Database SDK to your app.

   - Initialize the Firebase Realtime Database SDK.

   - Write and read data from your database.


## Installing Firebase SDK in a webpage

Add the following to your project file
```html
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-database.js"><script>
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"><script>
```

Then Add firebase configurations
```js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

```
you are good to start 🔥