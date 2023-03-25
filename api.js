// NYT Bestsellers Lists api.js
// Jean Paul Espinosa, Bruck Negash, Milca Ucelo
// CS4220-01
// Due: March 24, 2023

const superagent = require('superagent');
const base = 'https://api.nytimes.com/svc/books/v3/lists';
const apiKey = 'eiwoFSWEcXYP39JpcKVBBUvSUaL2JNZD';

// search for a specific date (keyword) within history of NYT bestsellers lists
const searchDate = async (keyword) => {
    // https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=eiwoFSWEcXYP39JpcKVBBUvSUaL2JNZD
    // https://api.nytimes.com/svc/books/v3/lists/2019-10-10/combined-print-and-e-book-fiction.json?api-key=eiwoFSWEcXYP39JpcKVBBUvSUaL2JNZD
    try {
        // console.log(`input= ${keyword}`);
        const searchURL = `${base}/${keyword}/combined-print-and-e-book-fiction.json?api-key=${apiKey}`;
        const res = await superagent.get(searchURL);

        return res.body;
    } catch (error) {
        console.log(error);
    }
};

// search for reviews of book_selection from previously selected genre
const searchSelection = async (isbn) => {
    // https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?isbn=9780735219090&api-key=eiwoFSWEcXYP39JpcKVBBUvSUaL2JNZD
    try {
        const descriptionURL = `${base}/best-sellers/history.json?isbn=${isbn}&api-key=${apiKey}`;
        const res = await superagent.get(descriptionURL);

        return res.body;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    searchDate,
    searchSelection
};