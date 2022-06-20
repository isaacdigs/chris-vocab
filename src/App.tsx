import {useState} from 'react';
import {TextField, Button, Select, MenuItem} from '@mui/material';
import './App.css'

export default function App() {
  {/* hard-coded vocab list */}
  const [vocabList, setVocabList] = useState([
    {
      word: 'hello',
      meanings: {
        partOfSpeech: 'noun',
        definition: 'a greeting',
        examples: [
          'hello',
          'hello there',
          'hello world'
        ]
      },
    },
    {
      word: 'world',
      meanings: {
        partOfSpeech: 'noun',
        definition: 'the whole earth',
        examples: [
          'world',
          'world wide web',
          'world wide web site'
        ]
      }
    },
  ]);

  {/*States for all inputs*/}
  const [word, setWord] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [definition, setDefinition] = useState('');
  const [examples, setExamples] = useState('');

  {/*Event handlers */}
  const addVocab = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setVocabList([...vocabList, {word, meanings: {partOfSpeech, definition, examples: [examples]}}]);
  }

  return (
    <div className="App">
      <h1>Chris Vocab App</h1>
      <form style={{display:'flex', flexDirection:'column'}}>
        <div>
          <TextField style={{margin:'1rem 0'}} id="outline-basic" label="Input Word" variant="outlined" size="small" value={word} onChange={e=> setWord(e.target.value)} />
          <Select
            style={{margin:'1rem'}}
            labelId="part-of-speech-label"
            id="part-of-speech"
            value={partOfSpeech}
            label="Part of Speech"
            size="small"
            onChange={e=>setPartOfSpeech(e.target.value)}
          >
            <MenuItem value='noun'>n.</MenuItem>
            <MenuItem value='verb'>v.</MenuItem>
            <MenuItem value='adjective'>adj.</MenuItem>
            <MenuItem value='adverb'>adv.</MenuItem>
            <MenuItem value='etc'>etc.</MenuItem>
          </Select>
        </div>
        <TextField style={{margin:'1rem'}} id="outline-basic" label="Definition" variant="outlined" size="small" value={definition} onChange={e=> setDefinition(e.target.value)} />
        <TextField style={{margin:'1rem'}} multiline minRows={2} id="outline-basic" label="Example" variant="outlined" size="big" value={examples} onChange={e=> setExamples(e.target.value)} />
        <Button style={{margin:'1rem'}} variant="contained" color="primary" onClick={addVocab} >Add Vocab</Button>
      </form>
      <ul>
        {vocabList.map((vocab, index) => {
          return (
            <li key={index}>
              <h2>{vocab.word}</h2>
              <p>{vocab.meanings.partOfSpeech}</p>
              <p>{vocab.meanings.definition}</p>
              <p>"{vocab.meanings.examples.join('" , "')}"</p>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}