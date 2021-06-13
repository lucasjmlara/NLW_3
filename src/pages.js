const Database = require("./db/db");
const saveOrfanatos = require("./db/saveOrfanatos");

module.exports = {

    index(req,res) {
        const city = req.query.city;
        return res.render('index', { city });
    },

    async orfanato(req, res) {
        const id = req.query.id;
        try {
            const db = await Database;
            const resultado = await db.all(`SELECT * FROM orfanatos WHERE id = ${id}`);
            const orfanato = resultado[0];

            orfanato.images = orfanato.images.split(',');
            orfanato.firstImage = orfanato.images[0];
            orfanato.open_on_weekends = (orfanato.open_on_weekends == '1') ? true : false;

            return res.render('orfanato', { orfanato });
        } catch (err) {
            console.log(err);
            return res.send('Erro no banco de dados!');
        }
    },

    async orfanatos(req, res) {
        try {
            const db = await Database;
            const orfanatos = await db.all("SELECT * FROM orfanatos");
            return res.render('orfanatos', { orfanatos });
        } catch (err) {
            console.log(err);
            return res.send('Erro no banco de dados!');
        }
    },

    create_orfanato(req, res) {
        return res.render('create-orfanato');
    },

    async saveOrfanato(req, res) {
        const fields = req.body;

        if(Object.values(fields).includes('')) {
            return res.send('Preencha todos os campos correctamente.');
        };

        try {
            const db = await Database;
            await saveOrfanatos(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                openin_hours: fields.openin_hours,
                open_on_weekends: fields.open_on_weekends,
        })
            return res.redirect('/orfanatos')
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!');
        };
    }

}