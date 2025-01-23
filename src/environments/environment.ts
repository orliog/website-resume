// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // replace the data below with your personal data
  personal: {
    caricature: "programmer.png",
    name: "Piotr Orlioglo",
    birth: "1987-01-05",
    email: "oppl87@gmail.com",
    phone: "+49 163 130 3572",
    location: "64665 Alsbach-Hähnlein, Germany"
  },
  
  firebaseConfig: {
    apiKey: "AIzaSyCuyHLn-fV7MOGooOU-xb9eu8eUvUcOh6w",
    authDomain: "profile-d337f.firebaseapp.com",
    databaseURL: "database",
    projectId: "profile-d337f",
    storageBucket: "profile-d337f.firebasestorage.app",
    messagingSenderId: "518633277566",
    appId: "1:518633277566:web:9f69f16eb778629febb02f"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
