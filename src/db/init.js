const Database = require("./db");

Database.then(async (db) => {
    await db.run(`
        INSERT INTO orfanatos (
            lat, lng, name, about, whatsapp, images, instructions, opening_hours, open_on_weekends
        ) VALUES (
            "-22.5669492",
            "-47.4057182",
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "19 99999-9999",
            "https://images.unsplash.com/photo-1600700468590-7b7ff15bc01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzNDUyMzk4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar!",
            "Horário de Visitas: Das 8h até 18h",
            "1"
        ), (
            "-22.5669492",
            "-47.4257182",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "19 99999-9999",
            "https://images.unsplash.com/photo-1600700468590-7b7ff15bc01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIzNDUyMzk4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar!",
            "Horário de Visitas: Das 8h até 18h",
            "0"
        )
    `);
})