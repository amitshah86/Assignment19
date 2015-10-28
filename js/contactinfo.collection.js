import Backbone from 'backbone';

let ContactinfoCollection = Backbone.Collection.extend({

url: 'https://api.parse.com/1/classes/Contactinfo', 

parse: function(data) {
  return data.results;

}

});
export default ContactinfoCollection;