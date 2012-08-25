var BaseView = Backbone.View.extend({
  baseEdit: function (event) {
    event.preventDefault();
    this.render(true);
  },
  baseSave: function (event,collectOnly) {
    event.preventDefault();
    if (collectOnly) {
        return simpleDataBind(this.el);
    }else {
        this.model.set(simpleDataBind(this.el));
        this.render();
    }
  },
  baseCancel: function (event) {
    event.preventDefault();
    this.render();
  }
});