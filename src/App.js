import React, {useEffect, useState} from 'react';
import './App.css';
import {markdownExample} from './data/mardownExamle'
import Input from "./components/Input";
import Output from "./components/Output";

// TODO sanitise HTML -> https://github.com/cure53/DOMPurify

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [inputMax, setInputMax] = useState(false);
  const [outputMax, setOutputMax] = useState(false);

  useEffect(() => {
    setMarkdownText(markdownExample);
  },[]);

  /**
   * @function changes state of InputMax and OutputMax depending on current state,
   * this manipulation allows windows inside App component to be resized to fullscreen and back
   * @param {object} e - synthetic JavaScript event object
   */

  function resize(e) {
    const type = e.currentTarget.value;

    if((type === 'input' && inputMax) ||
      (type === 'output' && outputMax)) {
      setInputMax(false);
      setOutputMax(false);
    } else if (type === 'input') {
      setInputMax(true);
      setOutputMax(false);
    } else if (type === 'output') {
      setInputMax(false);
      setOutputMax(true);
    }
  }

  return (
    <div className="App container" data-test="component-app">
      <Input
        data-test="component-input"
        markdownText={markdownText}
        setMarkdownText={setMarkdownText}
        inputMax={inputMax}
        outputMax={outputMax}
        resize={resize}
      />
      <Output
        data-test="component-output"
        markdownText={markdownText}
        inputMax={inputMax}
        outputMax={outputMax}
        resize={resize}
      />
    </div>
  );
}

export default App;
