import React, {useState} from 'react';
import './App.css';
import {FaMarkdown, FaArrowsAlt, FaRegEye} from "react-icons/fa";

const markdown = require( "markdown" ).markdown;

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const preview = markdown.toHTML(markdownText);

  return (
    <div className="App container">
      <div className='window input'>
        <div className='window__label-area'>
          <div className='flex'>
            <FaMarkdown className='window__logo-icon' />
            <label className='window__name'>Editor</label>
          </div>
          <FaArrowsAlt className='window__resize-btn'/>
        </div>
        <form className='window__input-form'>
          <textarea className='window__input-textarea' value={markdownText} onChange={e => setMarkdownText(e.target.value)}/>
        </form>
      </div>
      <div className='window output'>
        <div className='window__label-area'>
          <div className='flex'>
            <FaRegEye className='window__logo-icon' />
            <label className='window__name'>Previewer</label>
          </div>
          <FaArrowsAlt className='window__resize-btn'/>
        </div>
        <div className='window__output-textarea' dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
    </div>
  );
}

export default App;
