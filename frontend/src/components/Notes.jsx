import React from 'react';
import '../styles/note.css';

export default function Notes({note,onDelete}) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
  return (
    <div className="note-container">
        <div className="flex-container-1">
        <p><span className='note-subs'>Title :</span> <span className="note-title">
            {note.title}   </span></p>
            <p><span className='note-subs'>Content : </span><br/><br/><span className="note-content">
            {note.content}  </span></p>
            <p><span className='note-subs'>Published Date: </span><span className="note-date">
            {formattedDate}  </span></p>
        </div>
        <div className="flex-container-2">
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
            
    </div>
  )
}
