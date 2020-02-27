import React, {useState} from 'react';
import './App.css';
import {Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";

const markdown = require( "markdown" ).markdown;


function App() {
  const [markdownText, setMarkdownText] = useState('');
  const preview = markdown.toHTML(markdownText);

  return (
    <div className="App container">
      <Form>
        <FormGroup>
          <FormLabel>Markdown Input</FormLabel>
          <FormControl as='textarea' value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}/>
        </FormGroup>
      </Form>
        <div dangerouslySetInnerHTML={{ __html: preview }} />
    </div>
  );
}

export default App;
