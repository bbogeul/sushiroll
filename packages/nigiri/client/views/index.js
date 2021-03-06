Template.nigiriIndex.helpers({

});

Template.nigiriIndex.events = {
    'click #btnRemove': function(e) {
        e.preventDefault();
        var it = this._id;
        MeteorisAlert.confirm("confirm_remove", function() {
            Router.current().remove(it);
        });
    },
    /* sorting by parameter */
'click #btnSortname': function(e) {
MeteorisGridView.sort('name');
},
/* sorting by parameter */
'click #btnSortdescription': function(e) {
MeteorisGridView.sort('description');
},
/* sorting by parameter */
'click #btnSortprice': function(e) {
MeteorisGridView.sort('price');
},
/* sorting by parameter */
'click #btnSortdateAdded': function(e) {
MeteorisGridView.sort('dateAdded');
},

    'keyup #search': function(e, t) {
        e.preventDefault();
        Router.current().search(t);        
    },
    /* check all checkbox */
    'change #checkAll': function(e) {
        e.preventDefault();
        var checkboxes = $('.checkAll');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            checkboxes[i].checked = e.target.checked;
        }
    },
    /* remove all selected item */
    'click #btnRemoveAll': function(e) {
        e.preventDefault();
        var checkboxes = $('.checkAll');
        var checkedLength = 0;
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checkedLength++;
            }
        }

        if (checkedLength > 0) {
            MeteorisAlert.confirm("confirm_remove", function() {
                for (var i = 0; i < checkboxes.length; i++) {
                    // And stick the checked ones onto an array...
                    if (checkboxes[i].checked) {
                        Router.current().remove($(checkboxes[i]).val());
                    }
                }
            }, {count:checkedLength});
        } else {
            MeteorisFlash.set('danger', __("no_selection", "") + ".");
        }

        //set checkAll header to uncheck
        $('#checkAll').attr("checked", false);
    },
};