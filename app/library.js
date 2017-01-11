module.exports = {
 
   Array: function() {
      this.toTwenty = function() {
            var totwenty = [];
            for(var i=1; i<=20; i++) {
            totwenty.push(i);
         }
         return totwenty;
      };
      this.toForty = function() {
         var toforty  = [];
         for(var i=2; i<40; i+=2) {
            toforty.push(i);
         }
         return toforty;
   };

//
      this.toOneThousand = function() {
      var toonethousand = [];
      for(var i=10; i<=1000; i+=10) {
         toonethousand.push(i);
      }
      return toonethousand;
   };


      Array.prototype.search= function(num) 
      {
         var array= this;
         var count = 0;
         var len = this.length;
         var index = 0;
         var checkindex = 0;
         var obj = {};
         for (var s = 0; s < len; s += 1)
         {
            if(array[s] === num)
            {
               inde = s;
               break;
            }
         }
         while(true)
         {
            index =(array.length % 2 === 1) ? (array.length + 1)/2:array.length/2;
            count += 1;
            if(array.length === 1)
           {
              obj.count = count;
              obj.index = checkindex;
              obj.length = len;
              break;
           }            
            
            if(num === array[index])
            {
               obj.count = count;
               obj.index = checkindex;
               obj.length = len;
               break;
            }
            else
            {
               if(num < this[index])
               {
                  array.splice(index);
               }
               else
               {
                  array = array.splice(index);
               }
            }
         }
         return obj;
      }
   }
}