Template.nigiriView.events = {
    'click #btnRemove': function(e) {
        e.preventDefault();
        var it = this._id;
        MeteorisAlert.confirm("confirm_remove", function() {
            Router.current().remove(it);
            Router.go("nigiriIndex");
        });
    },
};

Template.nigiriView.helpers({
});