const linksCrtl = {};

const Link = require('../models/Link')

linksCrtl.renderLinksForm = (req, res) => {
    res.render('links/new-link')
};

linksCrtl.createNewLink = async (req, res) => {
    const { title, description } = req.body;
    const newLink = new Link({title,description});
    newLink.user = req.user.id;
    await newLink.save();
    req.flash('success_msg', 'Link Added Successfuly');
    res.redirect('/links')
};

linksCrtl.renderLinks = async (req, res) => {
    const links = await Link.find({user: req.user.id}).sort({createdAt: 'desc'}).lean();
    res.render('links/all-links', { links })
};

linksCrtl.renderEditForm = async (req, res) => {
    const link = await Link.findById(req.params.id).lean();
    if (link.user != req.user.id) {
        req.flash('error_msg', 'Not Autorized');
        res.redirect('/links');
    }
    res.render('links/edit-link', { link });
};

linksCrtl.updateLink = async (req, res) => {
    const { title, description } = req.body;
    await Link.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Link Updated Successfully');
    res.redirect('/links');
};

linksCrtl.deleteLink = async (req, res) => {
    await Link.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Link Deleted Successfully');
    res.redirect('/links')
};

module.exports = linksCrtl;