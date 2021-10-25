var restrictedAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'restricted')) {
        next();
        return;
    }
    res.redirect('/error');
 }
 

var viewAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'view')) {
        next();
        return;
    }
    res.redirect('/error');
 }
 
 var editAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'edit')) {
        next();
        return;
    }
    res.redirect('/error');
 }

module.exports.restrictedAccess = restrictedAccess;
module.exports.viewAccess = viewAccess;
module.exports.editAccess = editAccess;
