const express = require('express');
const mongoose = require('mongoose');
const Note = require('../models/note');

const router = express.Router();

// GET
router.get('/', (req, res) => {
    Note.find().exec().then((result) => {
        console.log("Fetching notes", result);
        res.status(200).json(result);
    }).catch((err) => {
        console.log("Error fetching notes", err);
        res.status(500).json({error: err});
    });
});

// POST
router.post('/', (req, res) => {
    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        content: req.body.content,
    });
    note.save().then((result) => {
        console.log("Saving note", result);
        res.status(201).json({
            message: 'Note created',
            createdNote: result,
        });
    }).catch((err) => {
        res.status(500).json({error: err});
    });
});

// PATCH
router.patch('/:id', (req,res) => {
    const id = req.params.id;
    Note.updateOne({_id: id}, {$set: req.body})
    .exec()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});

// DELETE
router.delete('/:id', (req,res) => {
    const id = req.params.id;
    Note.deleteOne({_id: id}).exec().then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});

module.exports = router;