// // buildscript.js

// const { exec } = require('child_process');
// const path = require('path');
// const open = require('open');

// // Build the client-side code
// const clientBuildCommand = 'npm install --prefix client && npm run build --prefix client';
// exec(clientBuildCommand, { cwd: path.resolve(__dirname) }, (err, stdout, stderr) => {
//   if (err) {
//     console.error(`Error building client: ${err}`);
//     return;
//   }

//   console.log(`Client build successful:\n${stdout}`);
  
//   // Start the server
//   const serverStartCommand = 'node server';
//   exec(serverStartCommand, { cwd: path.resolve(__dirname) }, (err, stdout, stderr) => {
//     if (err) {
//       console.error(`Error starting server: ${err}`);
//       return;
//     }

//     console.log(`Server started:\n${stdout}`);
    
//     // Open the default browser
//     const url = 'http://localhost:5000';
//     openBrowser(url);
//   });
// });

// function openBrowser(url) {
//   // Open browser based on the platform
//   const isWindows = process.platform === 'win32';
//   const isMacOS = process.platform === 'darwin';

//   if (isWindows) {
//     exec(`start ${url}`);
//   } else if (isMacOS) {
//     open(url).then(() => {
//       console.log('Browser opened successfully.');
//     }).catch((err) => {
//       console.error(`Error opening browser: ${err}`);
//     });
//   } else {
//     // Assume Linux or other platforms
//     exec(`xdg-open ${url}`);
//   }
// }
