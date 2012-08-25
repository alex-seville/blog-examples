var MyView = BaseView.extend({
    //we reference our main template
    template: "form_template.htm",
    //Just a render function for the example
    render: function (editable) {
      this.model.set({"Editable":editable||false});
      var tmpl = app.fetchTemplate(this.template);
      //I've passed in the model as the RenderObj and the templating function
      // tmpl as the compiledTemplate function (for BaseView.js)
      var viewContent = tmpl(this.model.toJSON());
      //This should work with just this.el.innerHTML = viewContent,
      //but for whatever reason it wasn't working, so I used
      //some messy jQuery to ensure the example works.
      $(this.el).html(viewContent);
    },
    //These events are linked to the functions in our BaseView
    events: {
       'click .editLink': 'edit',
       'click .save': 'save',
       'click .cancel': 'cancel'
    },
    save: function(event){
      event.preventDefault();
      var newModel = simpleDataBind(this.el);
      //we could save the model to the server,
      //with this new info, but we'll just do
      //a local update
      this.model.set(newModel);
      this.render(false);
    },
    edit: function (event) {
        event.preventDefault();
        this.render(true);
    },
    cancel: function (event) {
        event.preventDefault();
        this.render(false);
    }
});

var Person = Backbone.Model.extend({
    //put any model specific info you need in here
});
