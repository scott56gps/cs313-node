function getScriptures(request, response) {
    const data = {
        success: true,
        scriptures: [
            {
                id: 1,
                book: 'Helaman',
                chapter: 5,
                verse: 12
            },
            {
                id: 2,
                book: 'John',
                chapter: 13,
                verse: 14
            },
            {
                id: 3,
                book: 'Ether',
                chapter: 12,
                verse: 6
            }
        ]
    };

    response.json(data);
}

module.exports = {
    hanldeGetScriptures: getScriptures
}