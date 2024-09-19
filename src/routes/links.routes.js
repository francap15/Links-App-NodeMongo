const { Router } = require('express');
const router = Router();

const { renderLinksForm, 
    createNewLink, 
    renderLinks, 
    renderEditForm, 
    updateLink, 
    deleteLink
} = require('../controllers/links.controllers');

const { isAuthenticated } = require('../helpers/auth');


// New link
router.get('/links/add', isAuthenticated, renderLinksForm);

router.post('/links/new-link', isAuthenticated, createNewLink);

// Get all links
router.get('/links', isAuthenticated, renderLinks);

// Edit link
router.get('/links/edit/:id', isAuthenticated, renderEditForm);

router.put('/links/edit/:id', isAuthenticated, updateLink);

// Delete links
router.delete('/links/delete/:id', isAuthenticated, deleteLink);

module.exports = router;