/*
 *This file will be loaded into the DOM of the webpage a user visits because it is included in the manifest.json file as a `content_script`
 */

console.log('inception.js');

// Communication between background.js...
// runtime.sendMessage sends data to the background.js script
// callback is good for stuff
chrome.runtime.sendMessage({ greeting: 'Hello, this is the Tab speaking' }, function(response) {
  console.log('Response from background.js: ', response);
  
});
