/* Nigiri */
Router.route('nigiri', function() {
    Router.go('nigiriIndex');
});
Router.route('nigiri/index/:limit?/', {
    name: 'nigiriIndex',
    controller: NigiriController,
    action: 'index',
});
Router.route('nigiri/insert/', {
    name: 'nigiriInsert',
    controller: NigiriController,
    action: 'insert',
});
Router.route('nigiri/update/:_id?', {
    name: 'nigiriUpdate',
    controller: NigiriController,
    action: 'update',
});
Router.route('nigiri/view/:_id?', {
    name: 'nigiriView',
    controller: NigiriController,
    action: 'view',
});
/* EOF Nigiri */