/*!
 * Back To Drive v0.2.0 (http://robotxlabs.github.io/back-to-drive)
 * Copyright 2015-2016 RobotXLabs
 * Licensed under MIT
 * btdd.js
 */
document.querySelector("#docs-branding-container a").href = "http://drive.google.com";
window.onload = function(){
  document.querySelector("#docs-branding-container a").setAttribute("data-tooltip", "Back to Drive");
  document.querySelector("#docs-branding-container a").setAttribute("aria-label", "Back to Drive");
};
