(function() {
  'use strict';

  // Create our module
  angular.module('ngArrays', []).factory('ArrayService', arrayService);

  // Create our function 
  function arrayService() {

  	// Create our object
  	var arrayService = {
  		indexOf: indexOf,
		insertIfNotExist: insertIfNotExist,
  		modifiy: modify,
  		sortOn: sortOn,
  	}

  	// Return our service
  	return arrayService;

    // Finds the index of an item in an array
    function indexOf (array, value, key) {

        // Counter
        var i = -1;

        // Stringify our value for comparison
        var valueString = angular.toJson(value);

        // If we have defined our array and it has a length
        if (array && array.length) {

            // Set our vairable to the length
            i = array.length;
        }

        // If our array has any entries
        if (i > 0) {

            // While i
            while (i--) {

                // Get our current item
                var item = array[i];

                // If we have a key
                if (key) {

                    // If we find our value, break the loop
                    if (item[key] === value[key])
                        break;

                    // Otherwise, we do a normal index of
                } else {

                    // Stringify our value for comparison
                    var itemString = angular.toJson(item);

                    // If our value matches our item, break the loop
                    if (valueString === itemString)
                        break;
                }
            }
        }

        // Return our counter
        return i;
    };
	
	// Used to insert an item into an array if it doesn't already exist
	function insertIfNotExist(array, value, key) {

		// Get our index
		var index = indexOf(array, value, key);

		// If we don't find our item
		if (index === -1) {

			// Add to our array
			array.push(value);
		}
	};

    // Used to insert or remove an item from an array
    function modify(array, value, key) {

        // Get our index
        var index = self.indexOf(array, value, key);

        // If we find a positive index
        if (index > -1) {

            // Remove from the array
            array.splice(index, 1);
        } else {

            // Otherwise, add to our array
            array.push(value);
        }
    };

    // Sorts an array by the key
    function sortOn(array, name) {

    	// If we have no array, exit the function
    	if (!array)
    		return;

        // Call sort
        array.sort(function (a, b) {

            // If our attribute name is not the same as the second attribute
            if (a[name] <= b[name]) {

                // Return -1
                return (-1);
            }

            // Otherwise return 1
            return (1);
        });
    };
  };
}());

(function() {
  'use strict';

  angular.module('ngArrays');
}());