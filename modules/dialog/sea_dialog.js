define(function(require, exports){
    require('modules/dialog/dialog.css');
    require('modules/dialog/dialog');

    exports.open = dialog;
    exports.close = closedialog;
    exports.gethtml = gethtml;
});