import React from "react";
import {FaRegEye, FaArrowsAlt} from "react-icons/fa";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const classNames = require('classnames');
const markdown = require( "marked" );

markdown.setOptions({
  renderer: new markdown.Renderer(),
  highlight: function(code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code, true).value;
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

function Output(props) {
  const { markdownText, isMarkdownFull, isOutputFull, resize } = props;
  const preview = markdown(markdownText);

  return(
    <div className={classNames('window', 'output', {maximised: isOutputFull && !isMarkdownFull}, {hidden: !isOutputFull && isMarkdownFull})}>
      <div className='window__label-area'>
        <div className='flex'>
          <FaRegEye className='window__logo-icon' />
          <label className='window__name'>Previewer</label>
        </div>
        <button
          className='window__resize-btn'
          value='output'
          onClick={resize}
        >
          <FaArrowsAlt />
        </button>
      </div>
      <div
        id='preview'
        className={classNames('window__output-textarea', {'textarea--expanded': isOutputFull})}
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  )
}

export default Output