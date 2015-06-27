console.log('background.js');

/*
 *This file will be loaded in the background of your session because it is included in the manifest.json file a `background` script.
 *See also: The manifest file allows a boolean for a script to be `persitent`, meaning the script will run even if you're not actively engaging in the web page. Set as `false` for performance reasons, unless your extension needs persistence.
 */

chrome.commands.onCommand.addListener(function(command) {
  console.log('command: %s', command);

  /*
   *If you change the `suggested_key` property you need to remove/re-install the Extension from Chrome for the change to take effect.
   *via http://stackoverflow.com/questions/18132873/chrome-commands-keyboard-shortcuts-not-working-for-me
   */
});

chrome.commands.getAll(function(commands) {
  console.log('all: ', commands);
});

/*
 *Note:
 *Context menu needs permission to be set in the manifest.json file.
 *Context menu needs 16 pixel icon size set.
 */
var contextMenu = chrome.contextMenus;

contextMenu.create({ 
  id: 'foo', 
  title: 'Foo Bar', 
  contexts: ['all']
});
contextMenu.create({ 
  id: 'bar', 
  contexts: ['all'],
  type: 'separator'
});
contextMenu.create({ 
  id: 'baz', 
  title: 'Baz: %s',
  contexts: ['all'],
  type:'radio'
});
contextMenu.create({ 
  id: 'baz-bar', 
  title: 'Baz 2: %s',
  contexts: ['all'],
  type:'radio'
});
contextMenu.create({ 
  id: 'barbar', 
  contexts: ['all'],
  type: 'separator'
});
contextMenu.create({ 
  id: 'barcheck', 
  title: 'Bar Check',
  contexts: ['all'],
  type: 'checkbox'
});

contextMenu.onClicked.addListener(function(menuItem, page) {
  // handle for when something is chosen in the menu.
  console.log('Menu Item Clicked', menuItem, page);
});

// Communication between background.js and content_script...
// runtime.onMessage waits for incoming messages from either the content_script or the browser_action
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request, sender, sendResponse);

  sendResponse({greeting: 'Hello, this is the background script response'});
});
