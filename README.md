# capacitor-poc

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# How to add Capcitor to existing project

### 1. Check the node version. It should be 14 or higher
```
node --version
```
### 2. Install Capacitor
In the root of your app, install Capacitor's main npm depdencies: the core JavaScript runtime and the command line interface (CLI).

```
npm i @capacitor/core
npm i -D @capacitor/cli
```
### 3. Initialize Capacitor config
```
npx cap init
```
### 4. Install Android and iOS projects
```
npm i @capacitor/android @capacitor/ios
```
### 5. Add Android and iOS platform to your project
```
npx cap add android
npx cap add ios
```
###7. Create the build
```
yarn build
```
###7. Sync your web code to your native project
```
npx cap sync
```
npx cap sync will copy your built web application, by default www, to your native project and install the native projects dependencies.
###8. To run the project on a device or emulator, run:
```
npx cap run android
```
