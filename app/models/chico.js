exports.definition = {
	config: {
		//URL: "http://192.168.0.2/person",
		columns: {
		    "nombre": "text",
		    "apellido": "text",
		    "descripcion": "text",
		},
		adapter: {
			type: "restapi",
			name: "chico",
			collection_name: "chico"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			url:function(){
				return 'http://5.10.84.76:19952/deseo/'+this.get('id');
			},
			validate:function (attrs) {
				for (var key in attrs) {
				    var value = attrs[key];
				 	
				 	if (key === "firstname") {
				 		if (value.length <= 0) {
				 				return "Error: No firstname!";
				        }
				    }
				 	
				 	if (key === "lastname") {
				 
				 		if (value.length <= 0) {
				 			return "Error: No lastname!";
            			}	
        			}

        			if (key === "phone") {
				 
				 		if (value.length <= 0) {
				 			return "Error: No phone!";
            			}	
        			}	
    			}
            },
            customProperty: 'chico'
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			url:function(){
				return 'http://5.10.84.76:19952/deseo';
			}
		});

		return Collection;
	}
};