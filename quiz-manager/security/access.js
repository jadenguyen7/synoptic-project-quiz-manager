var restrictedAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'restricted' || req.user.role == 'view' || req.user.role == 'edit')) {
        next();
        return;
    }
    res.render("error", { message: "you do not have permission" });
 };
 

var viewAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'view' || req.user.role == 'edit')) {
        next();
        return;
    }
    res.render("error", { message: "you do not have permission" });
 };
 
 var editAccess = (req, res, next) => {
    if (req.user && (req.user.role == 'edit')) {
        next();
        return;
    }
    res.render("error", { message: "you do not have permission" });
 };

module.exports.restrictedAccess = restrictedAccess;
module.exports.viewAccess = viewAccess;
module.exports.editAccess = editAccess;
