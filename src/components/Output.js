import React from "react";
import {FaRegEye, FaArrowsAlt} from "react-icons/fa";

const classNames = require('classnames');
const markdown = require( "marked" );

markdown.setOptions({
  renderer: new markdown.Renderer(),
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

function Output(props) {
  const { markdownText, inputMax, outputMax, resize } = props;
  const preview = markdown(markdownText);

  return(
    <div className={classNames('window', 'output', {maximised: outputMax}, {hidden: inputMax})}>
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
        className={classNames('window__output-textarea', {'textarea--expanded': outputMax})}
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </div>
  )
}

export default Output