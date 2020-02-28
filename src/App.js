import React, {useEffect, useState} from 'react';
import './App.css';
import {markdownExample} from './data/mardownExamle'
import Input from "./components/Input";
import Output from "./components/Output";

// TODO sanitise HTML -> https://github.com/cure53/DOMPurify

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [isMarkdownFull, setIsMarkdownFull] = useState(false);
  const [isOutputFull, setIsOutputFull] = useState(false);

  useEffect(() => {
    setMarkdownText(markdownExample);
  },[]);

  function resize(e) {
    const type = e.currentTarget.value;

    if(type === 'markdown') {
      if(isMarkdownFull) {
        setIsMarkdownFull(false);
        setIsOutputFull(false);
      } else if(!isMarkdownFull) {
        setIsMarkdownFull(true);
        setIsOutputFull(false)
      }
    } else if (type === 'output') {
      if(isOutputFull) {
        setIsOutputFull(false);
        setIsMarkdownFull(false);
      } else if (!isOutputFull) {
        setIsOutputFull(true);
        setIsMarkdownFull(false);
      }
    }
  }

  return (
    <div className="App container">
      <Input
        markdownText={markdownText}
        setMarkdownText={setMarkdownText}
        isMarkdownFull={isMarkdownFull}
        isOutputFull={isOutputFull}
        resize={resize}
      />
      <Output
        markdownText={markdownText}
        isMarkdownFull={isMarkdownFull}
        isOutputFull={isOutputFull}
        resize={resize}
      />
    </div>
  );
}

export default App;
