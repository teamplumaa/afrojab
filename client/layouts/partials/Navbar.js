Template.Navbar.events({
    'click #logout-button': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
