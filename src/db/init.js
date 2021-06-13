const Database = require("./db");
const saveOrfanatos = require("./saveOrfanatos");

Database.then(async (db) => {
    await saveOrfanatos(db, {
        lat: "-22.5669492",
        lng: "-47.4057182",
        name:'Lar das meninas',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '19 99999-9999',
        images: [
            'https://images.unsplash.com/photo-1600700468590-7b7ff15bc01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzNDUyMzk4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
            'https://images.unsplash.com/photo-1572248364230-7f412885f2da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzNDUyNDI2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
        ].toString(),
        instructions:'Venha como se sentir a vontade e traga muito amor e paciência para dar!',
        openin_hours: 'Horário de Visitas: Das 8h até 18h',
        open_on_weekends: "1"
    });

    // const selectAll = await db.all("SELECT * FROM orfanatos");
    // console.log(selectAll);

    // const selectOne = await db.all("SELECT * FROM orfanatos WHERE id='3'");
    // console.log(selectOne);

    // await db.run("DELETE FROM orfanatos WHERE id='3'");

})