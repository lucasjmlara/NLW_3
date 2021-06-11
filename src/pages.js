const orfanatos = require("./db/fakedata")

module.exports = {

    index(req,res) {
        const city = req.query.city;
        return res.render('index', { city });
    },

    orfanato(req, res) {
        return res.render('orfanato');
    },

    orfanatos(req, res) {
        return res.render('orfanatos', {orfanatos});
    },

    create_orfanato(req, res) {
        return res.render('create-orfanato');
    }

}