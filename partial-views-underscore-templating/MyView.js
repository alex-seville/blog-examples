var MyView = BaseView.extend({
	//we reference our main template //
	template: "form_template.htm",
	//Add your init and custom view functions to the view //
	//This code doesn't need to be in render, but it makes sense for me. //
	//I'm using synchronous fetchTemplate from Backbone Boilerplate //
	//https://github.com/tbranyen/backbone-boilerplate //
	//But the call to the baseview can work regardless of how you //
	//load your template //
	//(I recommend the sync fetchTemplate for dev and then compiled templates for prod) //

    render: function () {
      var tmpl = app.fetchTemplate(this.template);
      //I've passed in the model as the RenderObj and the templating function //
      // tmpl as the compiledTemplate function (for BaseView.js) //
      var viewContent = this.baseRenderTemplate(tmpl,this.model.toJSON());
      //This should work with just this.el.innerHTML = viewContent, //
      //but for whatever reason it wasn't working, so I used //
      //some messy jQuery to ensure the example works. //
      $("#"+this.el.id).html(viewContent);
    }
});

var Person = Backbone.Model.extend({
	//put any model specific info you need in here //
});
