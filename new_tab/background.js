chrome.action.onClicked.addListener(() => {
  // create new tab
  // chrome.tabs.create({"url": "chrome://newtab"});

  // create new tab in "ing" group
  chrome.tabGroups.query({}, function (groups) {
    // Loop through all tab groups
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      // Check if this is the desired group
      if (group.title === "ing") {
        // Get the group's ID and move the tab to the group
        var groupId = group.id;
        chrome.tabs.create({ url: "chrome://newtab" }, function (tab) {
          chrome.tabs.group({ tabIds: [tab.id], groupId: groupId });
        });
        // Exit the loop since we've found the desired group
        break;
      }
    }
  });
});
