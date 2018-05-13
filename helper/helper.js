const fs = require('fs');
const _ = require('lodash');

var addNote = (title, body) => {
    let records = readNote();
    let newNote = {
        title,
        body
    };
    let duplicateNote = records.filter((n) => {
        return n.title === title;
    });
    if (duplicateNote.length === 0) {
        records.push(newNote);
        fs.writeFileSync('sample.json', JSON.stringify(records));
        return title;
    }
    else {
        return null;
    }
};

var updateNote = (title, body) => {
    let notes = readNote();
    let updateNote = {
        title,
        body
    };
    let duplicateNote = notes.filter((n) => {
        return n.title !== title;
    });
    duplicateNote.push(updateNote);
    fs.writeFileSync('sample.json', JSON.stringify(duplicateNote));
    return JSON.stringify(duplicateNote);
};

var deleteNote = (title) => {

};

var readNote = () => {
    try {
        let notes = fs.readFileSync('sample.json');
        return JSON.parse(notes);
    }
    catch (ex) {
        return [];
    }
};

var getNote = (title) => {
    let notes = readNote();
    let duplicateNote = notes.filter((n) => {
        return n.title === title;
    });
    if (duplicateNote.length != 0) {
        return duplicateNote;
    }
    else {
        return null;
    }
};

module.exports = {
    addNote,
    updateNote,
    deleteNote,
    readNote,
    getNote
};