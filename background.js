var incognito_theme = {
  images: {
    headerURL: '',
  },
  colors: {
    accentcolor: "#25003E",
    textcolor: "#ffffff",
    toolbar: "#4B0064",
    toolbar_text: "#f7ddffd0"
  }
};

function checkIncognito(win) {
  if(win.incognito) {
    browser.theme.update(win.id, incognito_theme);
  }
}

function checkAllWindows() {
  browser.windows.getAll().then(function(wins) {
    wins.forEach(function(win) {
      checkIncognito(win);
    });
  });
}

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkAllWindows);
browser.alarms.create('checkAllWindows', {periodInMinutes: 5});

browser.windows.onCreated.addListener(checkAllWindows);
checkAllWindows();