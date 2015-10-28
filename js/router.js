import Backbone from 'backbone';
import $ from 'jquery';
import HomeTemplate from './views/home';
import contactinfoTemplate from './views/contactinfo';
import ContactinfoCollection from './contactinfo.collection';

let Router = Backbone.Router.extend ({

routes: {
  "" : "home",
  "contactinfo" : "showContactinfo",
  "contactinfo/:id" :"showeachindividual"
},

initialize: function(appElement) {
  this.$el = appElement;

  this.contactinfo = new ContactinfoCollection();

  let router = this;

  this.$el.on('click', '.contactinfo-list-item', function(event){
    let $li = $(event.currentTarget);
    var contactinfoId = $li.data('contactinfo-id');
    router.navigate(`contactinfo/${contactinfoId}`);
    router.showeachindividual(contactinfoId);

  });
},

home: function() {
  console.log('show home page');
  this.$el.html(HomeTemplate());
},

showSpinner: function() {
  this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'

    );

},

showeachindividual: function(contactinfoId) {
  let contactinfo = this.contactinfo.get(contactinfoId);

  if (contactinfo) {
    this.$el.html( contactinfoTemplate(contactinfo.toJSON()) );
  } else {
    let router = this;
    contactinfo = this.contactinfo.add({objectId: contactinfoId});
    this.showSpinner();
    contactinfo.fetch().then(function() {
      router.$el.html( contactinfoTemplate(contactinfo.toJSON()) );

    });

  }

},

showContactinfo: function() {
  console.log('show contactinfo page');

  this.showSpinner();

  var router = this;

  this.contactinfo.fetch().then(function(){

    router$el.html( contactinfoTemplate(this.contactinfo.toJSON()) );
  
  });

},

start: function() {
  Backbone.history.start();

}


});

export default Router;