import React from "react";
import {FaMarkdown, FaArrowsAlt} from "react-icons/fa";
const classNames = require('classnames');

function Input(props) {
  const { markdownText, setMarkdownText, inputMax, outputMax, resize } = props;

  return(
    <div className={classNames('window', 'input', {maximised: inputMax}, {hidden: outputMax})}>
      <div className='window__label-area'>
        <div className='flex'>
          <FaMarkdown className='window__logo-icon' />
          <label className='window__name'>Editor</label>
        </div>
        <button
          className='window__resize-btn'
          value='input'
          onClick={resize}
        >
          <FaArrowsAlt />
        </button>
      </div>
      <form className='window__input-form'>
          <textarea
            id='editor'
            className={classNames('window__input-textarea', {'textarea--expanded': inputMax})}
            value={markdownText}
            onChange={e => setMarkdownText(e.target.value)} />
      </form>
    </div>
  )
}

export default Input