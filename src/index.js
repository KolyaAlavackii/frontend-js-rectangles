
var areIntersected = function(rect1, rect2) {
     if (rect1.top + rect1.width > rect2.top &&
         rect1.left + rect1.height > rect2.left &&
         rect1.left < rect2.left + rect2.height) {
         return true;
    }
      else {
        return false;
    }
}



var filterVisible = function(rect, array) {
     var arrayRect = array.filter(function(element){
       if(areIntersected(rect, element) && (element.width && element.height > 0)){
           return element;
         }
       })
     return arrayRect;
   }

