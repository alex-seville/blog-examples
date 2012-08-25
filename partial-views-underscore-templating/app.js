//This code is taken from an earlier version of Backbone Boilerplate
//Updating to the most recent version will not break
//the partial view code, but it may require some minor tweaks
//https://github.com/tbranyen/backbone-boilerplate/blob/f749697e69c217d44f5667763895e891e3169e72/app/app.js

// Localize or create a new JavaScript Template object.
var JST = window.JST = window.JST || {};

// Keep active application instances namespaced under an app object.
var app = window.app = _.extend({

  // This is useful when developing if you don't want to use a
  // build process every time you change a template.
  //
  // Delete if you are using a different template loading method.
  fetchTemplate: function(path) {

    // Should be an instant synchronous way of getting the template, if it
    // exists in the JST object.
    if (!JST[path]) {
      // Fetch it asynchronously if not available from JST, ensure that
      // template requests are never cached and prevent global ajax event
      // handlers from firing.
      $.ajax({
        url: "./" + path,
        dataType: "text",
        cache: false,
        async: false,

        success: function(contents) {
          JST[path] = _.template(contents);
        }
      });
    }

    // Ensure a normalized return value.
    return JST[path];
  },

  // Create a custom object with a nested Views object
  module: function(additionalProps) {
    return _.extend({ Views: {} }, additionalProps);
  }

// Mix Backbone.Events into the app object.
}, Backbone.Events);