//Simple data bind
//call simpleDataBind(element) to get the updated state of the object

(function(){
  this.simpleDataGet = function(elem,getFcn){
      var saveObj = {};
      //We loop through all the elements that have a data-for
      //attribute set.
      $(elem).find("[data-for]").each(function (indx, obj) {
        //we create a jquery object for the element,
        //get the data-for attribute value
        var $obj = $(obj),
        datafor = $obj.data()["for"];
        //a '.' in the attribute means we're binding the property of
        //and object, i.e. 'person.name' means we're binding the name
        //property of an object called person.
        if (datafor.indexOf('.') > 0) {
          //create a local copy of the current obj
          var newObj = saveObj;
          //split the attribute into tokens
          var splitdatafor = datafor.split('.');
          $.each(splitdatafor, function (index, val) {
            //if it's the last token we just save the value
            if (index === splitdatafor.length - 1) {
              newObj[val] = $.isFunction(getFcn) ? getFcn(val,$obj) : $obj.val();
            } else {
              //other we check if the property already exists
              //if it doesn't we create an empty object
              if (!newObj.hasOwnProperty(val)) {
                newObj[val] = {};
              }
              //then we change the reference
              //so it will point to the next level down
              newObj = newObj[val];
            }
          });
        } else {
          //if it's not a multi-level attribute,
          //just set the value
          saveObj[datafor] = $.isFunction(getFcn) ? getFcn(val,$obj) : $obj.val();
        }
      });
      //return the data
      return saveObj;
  };
  this.simpleDataUpdate = function(obj,updateFcn,prefix){
    prefix = prefix || "";
    for (var prop in obj) {
      //if it's an object we need to recurse to find the actual
      //value
      if ($.isPlainObject(obj[prop])){
        this.simpleDataUpdate(obj[prop],prefix+"."+prop+".");
      }else{
        //try to find an element with a data-to set to the property
        var elem = $('[data-to="'+prefix+prop+'"]');
        if (elem.length){
          //use the update function callback
          if ($.isFunction(updateFcn)){
            updateFcn(elem,obj[prop]);
          }else{
            //or just use the val
            elem.val(obj[prop]);
          }
        }else{
          //we might not need this property to be binded
          //but we log a message just to help
          console.log("could not find element with data-to of "+prop);
        }
      }
    }
  };
}).call(this);