const mongoose = require('mongoose');

// Categorie Schema
const categorieSchema = mongoose.Schema({
	nom:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Categorie = module.exports = mongoose.model('Categorie', categorieSchema);

// Get categories
module.exports.getCategories = (callback, limit) => {
	Categorie.find(callback).limit(limit);
}

// Get categorie
module.exports.getCategorieById = (id, callback) => {
	Categorie.findById(id, callback);
}

// Add categorie
module.exports.addCategorie = (categorie, callback) => {
	Categorie.create(categorie, callback);
}

// Update categorie
module.exports.updateCategorie= (id, categorie, options, callback) => {
	var query = {_id: id};
	var update = {
		nom: categorie.nom
	}
	Categorie.findOneAndUpdate(query, update, options, callback);
}

// Delete categorie
module.exports.removeCategorie = (id, callback) => {
	var query = {_id: id};
	Categorie.remove(query, callback);
}
