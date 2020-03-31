/*!
 * Back To Drive v0.3.0 (http://amazansky.github.io/back-to-drive)
 * Copyright 2015-2020 Alex Mazansky
 * Licensed under MIT
 * btdd.js
 */
var container = document.querySelector('#docs-branding-container a');
var img = document.querySelectorAll(".docs-branding-icon-img")[1]

container.href = "http://drive.google.com";
img.className = "docs-branding-icon-img docs-branding-icon-drive";

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type == "attributes" && container.getAttribute("data-tooltip") != "Back to Drive") {
      container.setAttribute("data-tooltip", "Back to Drive");
      container.setAttribute("aria-label", "Back to Drive");
    }
  });
});

observer.observe(container, { attributes: true });