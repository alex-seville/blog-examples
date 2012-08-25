var BaseView = Backbone.View.extend({
  //We add a function shared by all our views
  baseRenderTemplate: function(compiledTemplate,renderObj){
    if (!$.isFunction(compiledTemplate)){
        console.log("invalid parameter to baseRenderTemplate, compiledTemplate is not a function.");
    }else{ 
        //We extend into renderObj a function called
        //partial and then return it to the callback compiledTemplate
        //which itself is returned to the caller of baseRenderTemplate
        return compiledTemplate($.extend({ 
          partial: function( partialName, variables ) { 
            //if you don't use underscore templating
            //you can replace this with your templating code
            if (!window.JST[partialName]){
                app.fetchTemplate(partialName);
            }
            return window.JST[partialName](variables); 
          } 
        },renderObj)); 
    }
  }
}); 