import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaTrash, FaCheck } from 'react-icons/fa';
import '../style.css';

const Note = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(props.title);
    const [updatedContent, setUpdatedContent] = useState(props.content);
    const [noteClass, setNoteClass] = useState('');
    const [editBackground, setEditBackground] = useState('');

    useEffect(() => {
        const index = Math.floor(Math.random() * 5);
        const randomColorClass = `note-color-${index}`;
        setNoteClass(randomColorClass);
    }, []);

    const handleUpdate = () => {
        props.updateNote(props.id, updatedTitle, updatedContent);
        setEditMode(false);
    };

    return (
        <div className={`note ${noteClass} ${editMode ? 'edit-mode' : ''}`}>
            {editMode ? (
                <div>
                    <input
                        
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        type='text'
                        className='title-input'/>
                    <textarea
                        value={updatedContent}
                        onChange={(e) => setUpdatedContent(e.target.value)}
                        className='content-input'/>
                    <button 
                        onClick={handleUpdate} 
                        className='text-green-500 text-xl px-2 py-1'>
                        <FaCheck size={18} />
                    </button>
                </div>
            ) : (
                <div>
                    <h1 className='title-display'>{props.title}</h1>
                    <p className='content-display'>{props.content}</p>
                    <div className='action-buttons'>
                        <button 
                            onClick={() => setEditMode(true)} 
                            className='text-blue-400 text-xl mx-3 p-2'>
                            <FaPencilAlt size={16} />
                        </button>
                        <button 
                            onClick={props.deleteNote}
                            className='text-red-600 text-xl mx-3 p-2'>
                            <FaTrash size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Note;