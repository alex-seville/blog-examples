//Simple data bind
//call simpleDataBind(element) to get the updated state of the object

(function(){
  this.simpleDataBind = function(elem){
      var saveObj = {};
      $(elem).find("[data-for]").each(function (indx, obj) {
        var $obj = $(obj),
        datafor = $obj.data()["for"],
        newObj = saveObj;
        //it's possible that we may want to bind to subattributes
        if (datafor.indexOf('.') > 0) {
          var splitdatafor = datafor.split('.');
          $.each(splitdatafor, function (index, val) {
            if (index === splitdatafor.length - 1) {
              newObj[val] = $obj.val();
            } else {
              if (!newObj.hasOwnProperty(val)) {
                newObj[val] = {};
              }
              newObj = newObj[val];
            }
          });
        } else {
          saveObj[datafor] = $obj.val();
        }
      });
      return saveObj;
    };
}).call(this);