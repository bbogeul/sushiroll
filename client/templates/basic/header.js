Template.templateBasicHeader.events({


    'click a.lang':function(e) {
        lang='undefined';
        $this=$(e.target);
        lang=$this.data("lang");
        MeteorisI18n.setSessionLanguage(lang);
    },
    'click #btnLogout': function() {
        Meteor.logout(function() {
            Router.go('usersLogin');
        });          
    }
});
Template.templateBasicHeader.rendered = function() {
new WOW( { mobile:       false}  ).init();
  Meteor.setTimeout(function() {
    
    this.$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: false,
      alignment: 'right',
      gutter: 0,
      belowOrigin: true
    });

    this.$('.button-collapse').sideNav({
      menuWidth: 240,
      activationWidth: 70,
      closeOnClick: true
    });

  }.bind(this), 200);
};