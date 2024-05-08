import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/note';
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa';
import './style.css';  

const App = () => {
  const [notes, setNotes] = useState();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then((res) => {
        setNotes(res.data);
      }).catch((err) => {
        console.log(err);
      });
    },[notes]);

  const addNote = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/notes`, { title, content })
      .then((res) => {
        console.log(res.data);
        setNotes([...notes, res.data]);
        setTitle('');  
        setContent('');  
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (id) => {
    axios.delete(`http://localhost:3001/notes/${id}`)
    .then((res) => {
      console.log(res.data);
      setNotes(notes.filter((note) => note._id !== id));
    });
  };

  const updateNote = (id, updatedTitle, updatedContent) => {
    axios.patch(`http://localhost:3001/notes/${id}`, { 
      title: updatedTitle, 
      content: updatedContent 
    })
      .then((res) => {
        console.log(res.data);
        const updatedNote = notes.map((note) =>
          note._id === id ? {
            title: updatedTitle, 
            content: updatedContent} 
            : note
        );
        setNotes(updatedNote);
      }).catch((err) => console.log(err));
  };

  const renderTitle = (title) => {
    return title.split('').map((letter, index) => (
      letter.trim() !== '' 
        ? <span key={index} className={`note-letter note-color-${index % 5}`}>{letter}</span>
        : <span key={index}>{letter}</span> 
    ));
  };
  
  

  return (
    <div className='bg-yellow-50  min-h-screen'>
      <h1 className='text-7xl font-medium py-6 mx-auto text-center shadow-lg'>
        {renderTitle('Notes Keeper')}
      </h1>
      <form 
        onSubmit={addNote}
        className='bg-yellow-200 shadow-md rounded-lg p-5 w-1/2 mx-auto my-10'>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          className='block w-full mb-4 p-3 rounded-lg bg-yellow-50 border border-yellow-300'
          type="text"/>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content..."
          className='block w-full mb-4 p-3 rounded-lg bg-yellow-50 border border-yellow-300'
          rows="4"></textarea>
        <button 
          type='submit'
          className="round-icon-button">
            <FaPlus />
        </button>
      </form>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {
          notes && notes.map((note, index) => (
            <div key={index}>
            <Note 
              id={note._id}
              title={note.title} 
              content={note.content}
              deleteNote={() => deleteNote(note._id)}
              updateNote={updateNote}
              FaPen={FaPen}
              FaTrash={FaTrash}s
            />
            </div>
          ))
        }
      </div>
    </div>  
  );
};

export default App;
