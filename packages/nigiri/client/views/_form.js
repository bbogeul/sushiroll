Template.nigiri_form.rendered = function() {
    $('#dateAdded').datepicker();
};

Template.nigiri_form.helpers({
    /* show error message on view */
    error: function(field) {
        return MeteorisSimpleSchema.error(Nigiri, field);
    },
    /* get current selected dropdown */
    selected: function(_id) {
        if (this._id === _id)
            return "selected";
    },
    
});