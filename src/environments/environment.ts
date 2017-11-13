// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDOt183jKi5DGt75fu5NDb95PUh_OoRl-o',
    authDomain: 'workbase.firebaseapp.com',
    databaseURL: 'https://workbase.firebaseio.com',
    projectId: 'firebase-workbase',
    storageBucket: 'firebase-workbase.appspot.com',
    messagingSenderId: '691473179419'
  }
};
