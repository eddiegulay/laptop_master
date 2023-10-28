# GDSC UDSM: Mastering Realtime Website Development

## Table of Contents

- [GDSC UDSM: Mastering Realtime Website Development](#gdsc-udsm-mastering-realtime-website-development)
  - [Table of Contents](#table-of-contents)
  - [Git Flow in Project Management](#git-flow-in-project-management)
    - [Key Elements of Git Flow in Project Management:](#key-elements-of-git-flow-in-project-management)
    - [Workflow in Project Management](#workflow-in-project-management)
    - [Git Flow Commands:](#git-flow-commands)
    - [Advantages in Project Management](#advantages-in-project-management)
  - [Firebase Realtime Database with JavaScript](#firebase-realtime-database-with-javascript)
    - [What is Firebase Realtime Database?](#what-is-firebase-realtime-database)
    - [Setting Firebase App](#setting-firebase-app)
    - [Installing Firebase in your project](#installing-firebase-in-your-project)
    - [Writing Data](#writing-data)
    - [Reading Data](#reading-data)
    - [Updating Data](#updating-data)
    - [Deleting Data](#deleting-data)
    - [Resources](#resources)


## Git Flow in Project Management

Git Flow is a version control workflow that helps manage software development projects efficiently. In a project management context, it provides structure and organization for tasks related to code development, quality assurance, and release planning.

### Key Elements of Git Flow in Project Management:

- **Master Branch - Production:** Think of the "master" branch as the final product or the live environment. This is where the stable and production-ready code resides. It reflects what's currently deployed or in use by customers.

- **Develop Branch - Ongoing Development:** The "develop" branch represents the ongoing development efforts. It's like your project's main development workspace where new features and bug fixes are integrated. This branch should always be in a working and stable state.

- **Feature Branches - Task Management:** Feature branches are like individual tasks or user stories in project management. Each feature branch corresponds to a specific feature, enhancement, or bug fix. They are created from the "develop" branch and serve as isolated spaces for developers to work on specific tasks.

- **Release Branches - Preparing for Deployment:** When you're preparing for a new project release or a significant update, you create a release branch. This is similar to a project milestone where final testing, bug fixes, and preparations for deployment are made. It helps ensure that the release is stable and well-tested.

- **Hotfix Branches - Emergency Fixes:** In project management, unexpected issues can arise in the live environment. Hotfix branches are like emergency tasks that need immediate attention. They are created from the "master" branch to address critical problems, and the fixes are merged into both "master" and "develop."

### Workflow in Project Management

1. **Task Creation:** Each task in project management corresponds to a feature branch in Git Flow. These tasks are created and assigned to developers for implementation.

2. **Development:** Developers work on their respective tasks in feature branches, which are isolated from the main development branch (i.e., "develop"). This ensures that changes are contained until they are ready for integration.

3. **Integration:** Completed tasks are integrated into the "develop" branch for ongoing development.

4. **Release Planning:** When it's time to plan a new project release, a release branch is created. This is similar to defining a project milestone and preparing for a specific phase of the project.

5. **Testing and Quality Assurance:** The release branch allows for comprehensive testing and quality assurance efforts, making sure the release is stable and free of critical issues.

6. **Deployment:** Once testing is successful and the release is ready, it's merged into the "master" branch, representing the live environment, and is deployed for customers or end-users.

7. **Hotfixes:** In the event of critical issues in the live environment, hotfix branches are created to address them. This is akin to immediate problem resolution in project management, ensuring that urgent issues are fixed promptly.

### Git Flow Commands:

- **git flow init:** Initializes Git Flow in a repository.

```bash
git flow init
```

- **git flow feature start:** Creates a new feature branch from the "develop" branch.

```bash
git flow feature start <feature-name>
```

- **git flow feature finish:** Merges a feature branch into the "develop" branch.

```bash
git flow feature finish <feature-name>
```

- **git flow release start:** Creates a new release branch from the "develop" branch.
- **git flow release finish:** Merges a release branch into the "master" and "develop" branches.
- **git flow hotfix start:** Creates a new hotfix branch from the "master" branch.
- **git flow hotfix finish:** Merges a hotfix branch into the "master" and "develop" branches.
- **git flow feature publish:** Publishes a feature branch to the remote repository.
- **git flow feature pull:** Pulls a feature branch from the remote repository.
- **git flow feature track:** Tracks a feature branch in the remote repository.

More on [Git Flow Docs 🔗](https://docs.github.com/en/get-started/quickstart/github-flow)

### Advantages in Project Management

- **Structured Development:** Git Flow provides a clear structure for code development and task management, making it easier to track progress.

- **Quality Assurance:** The use of release branches ensures thorough testing before deployment, enhancing the quality of releases.

- **Emergency Response:** Hotfix branches allow for rapid response to critical issues, minimizing downtime or service disruptions.

- **Release Planning:** Release branches align with project milestones and help in planning and executing releases systematically.

## Firebase Realtime Database with JavaScript

### What is Firebase Realtime Database?

Firebase Realtime Database is a cloud-hosted database that helps us to store and sync data with NoSQL cloud database in realtime to every connected client. In this tutorial, we're gonna look at way to read/write data in Firebase Realtime Database.

### Setting Firebase App

1. Go to the Firebase console and create a new account or sign in to your existing account.

2. Click the Add project button and enter a name for your project.

3. Select the Realtime Database checkbox and click the Continue button.

4. Choose a starting mode for your Realtime Database security rules:

   - Test mode: This mode allows anyone to read and write data to your database. This is useful for getting started with the Firebase Realtime Database. However, you should configure more secure rules for production apps.
   - Strict mode: This mode only allows authenticated users to read and write data to your database. This is useful for production apps.
   - Custom mode: This mode allows you to define your own security rules.

5. Click the Create project button.

6. Once your project has been created, you can start creating your Firebase Realtime Database app. To do this, follow these steps:

   - In the Firebase console, click the Realtime Database tab.

   - Click the Get started button.

   - Follow the instructions to add the Firebase Realtime Database SDK to your app.

   - Initialize the Firebase Realtime Database SDK.

   - Write and read data from your database.

### Installing Firebase in your project

- Add Firebase JavaScript files to your web app with the following script tags

```html
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-database.js"><script>
    <script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"><script>
```

- Add firebase configurations

```js
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID",
    databaseURL: "YOUR_DATABASE_URL"
};
```

- Initialize Firebase in your app

```js
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();
```

you are good to start 🔥

### Writing Data

```js

product = {
    name: "Product Name",
    price: 1000,
    description: "Product Description"
}

database.ref("products").push(product);

```

### Reading Data

This will read all data in the products node in realtime

```js

database.ref("products").on("value", function(snapshot) {
    console.log(snapshot.val());
});
```

This will read all data in the products node once

```js

database.ref("products").once("value", function(snapshot) {
    console.log(snapshot.val());
});
```

This will read data in the products node with a specific key

```js

database.ref("products/-MgZ2Z2Z2Z2Z2Z2Z2Z2").once("value", function(snapshot) {
    console.log(snapshot.val());
});
```

This will read data in the products node with a specific key and a specific child

```js

database.ref("products/-MgZ2Z2Z2Z2Z2Z2Z2Z2/name").once("value", function(snapshot) {
    console.log(snapshot.val());
});
```

### Updating Data

This will update data in the products node with a specific key

```js

var productKey = "-MgZ2Z2Z2Z2Z2Z2Z2Z2";
var productData = {
    name: "Product Name",
    price: 1000,
    description: "Product Description"
}

database.ref("products/" + productKey).update(productData);
```

### Deleting Data

This will delete data in the products node with a specific key

```js

var productKey = "-MgZ2Z2Z2Z2Z2Z2Z2Z2";

database.ref("products/" + productKey).remove();
```

### Resources

- [Firebase Docs 🔗](https://firebase.google.com/docs)
- [Firebase Realtime Database Fundamentals (youtube) 🔗](https://youtu.be/pP7quzFmWBY)