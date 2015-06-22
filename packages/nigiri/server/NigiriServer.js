Meteor.publishComposite('nigiri', function(doc, sort) {
    doc.appId = App.id;
    console.log("subscribing some Nigiri with it's relation in App Id = " + App.id);
    return{
        find: function() {
            return Nigiri.find(doc, sort);
        },
        children: [
            /* return all related Users */
            {
                find: function(collection) {
                    return Meteor.users.find({
                        $or: [
                            {_id: collection.createdUserId},
                            {_id: collection.updatedUserId},
                        ]
                    });
                }
            },
            
        ],
    }
});


Meteor.methods({
    "Nigiri.insert": function(doc) {
        var _id = Nigiri.insert(doc);
        return {
            _id: _id,
        }
    },
});

/* observing collection */
/* uncomment to use
 var query = Nigiri.find({});
 var handle = query.observe({
 removed: function(model) {
 //removing related image, when post removed
 Images.remove(model.imageId);
 }
 });
 */