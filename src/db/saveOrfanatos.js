function saveOrfanatos(db, orfanatos) {
    return db.run(`INSERT INTO orfanatos (
        lat, lng, name, about, whatsapp, images, instructions, opening_hours, open_on_weekends
        ) VALUES (
            "${orfanatos.lat}",
            "${orfanatos.lng}",
            "${orfanatos.name}",
            "${orfanatos.about}",
            "${orfanatos.whatsapp}",
            "${orfanatos.images}",
            "${orfanatos.instructions}",
            "${orfanatos.opening_hours}",
            "${orfanatos.open_on_weekends}"
        );
    `)
}

module.exports = saveOrfanatos;