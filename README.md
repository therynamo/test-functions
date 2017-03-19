test-functions
===

A set of functions for testing out [Google Cloud Functions](https://cloud.google.com/functions/).

Building
===

`npm run build` will zip up the directory. Once you've run that command you can upload the zip to a GCS bucket however you'd like (Using the `upload zip` option in GCF is a quick way to do it).

Deploying
===

When creating a GCF, import the zip folder from your storage bucket (or upload). Then, in the `Function to execute` input field, place one of the methods exported in the main `index.js` file.

### Credentials

Store credentials in `.creds.js` in an object. It will get zipped up with the rest of the project and ignored in source control.

```js
module.exports = {
  twilioPhoneNumber: "<Phone>",
  twilioAccountSid: "<SID>",
  twilioAuthToken: "<AuthToken>"
}
```

Testing
===

You can use the [functions-emulator](https://github.com/GoogleCloudPlatform/cloud-functions-emulator) to run any of the functions locally prior to deploying your function. You can install this globally if you choose, though basic functionality is covered in the npm scripts.

1) `npm start`, to start up the emulator
2) `npm run deploy -- <functionName> --<flags>`, to deploy your function locally
3) `npm run call -- <functionName>`, to call your method
4) `npm run logs`, to get logs from your function
5) `npm run stop`, stops GCF emulator

Debugging
===

1) `npm run inspect --<functionName>`, to run your function in debug mode
2) `npm run logs` to get chrome debug url

[Debugging functions emulator with Chrome DevTools](https://github.com/GoogleCloudPlatform/cloud-functions-emulator/wiki/Debugging-with-Chrome-DevTools)