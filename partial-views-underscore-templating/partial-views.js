// Partial_Views
// Partial views for underscore templating

(function(){
  /**
   * @renderWithPartial
   * @public
   *
   * @param {function} compiledTemplate - a compiled template function (the parent template)
   * @param {object} renderObj - the Object you are passing into the template
   * @param {function} fetchTemplate - callback to fetch the partial view template
   *
   */
  this.renderWithPartial = function(compiledTemplate,renderObj,fetchTemplate){
    if (!$.isFunction(compiledTemplate)){
        console.log("invalid parameter to baseRenderTemplate, compiledTemplate is not a function.");
    }else{
        // We extend into renderObj a function called
        // partial and then return it to the callback compiledTemplate
        // which itself is returned to the caller of renderWithPartial
        return compiledTemplate($.extend({
          partial: function( partialName, variables ) {
            return fetchTemplate(partialName)(variables);
          }
        },renderObj));
    }
  };
}).call(this);