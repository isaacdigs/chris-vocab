import {useState} from 'react';
import {TextField, Button, Select, MenuItem, Container, Paper} from '@mui/material';
import './App.css'
import {VocabCard} from './components/VocabCard'

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
      isFavorite: false
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
      },
      isFavorite: false
    },
  ]);

  {/*States for all inputs*/}
  const [word, setWord] = useState<string>('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [definition, setDefinition] = useState('');
  const [examples, setExamples] = useState('');

  {/*States for all buttons*/}
  const [toggleAdd, setToggleAdd] = useState(true);

  {/*Event handlers */}
  const addVocab = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setVocabList([...vocabList, {word, meanings: {partOfSpeech, definition, examples: [examples]}, isFavorite: false}]);
  }
  const handleFavorite = (vocab: {word: string, meanings: {partOfSpeech: string, definition: string, examples: string[]}, isFavorite: boolean}) => {
    setVocabList((vocabList) => (vocabList.map(v => {
      if (v.word === vocab.word) {
        return {...v, isFavorite: !v.isFavorite};
      }
      return v;
    }
    )));
  }


  return (
    <Container className="App">
      <h1>Chris Vocab App</h1>
      <Paper elevation={3} style={{marginBottom: '2rem', padding: '1rem'}}>
        <form style={{display:'flex', flexDirection:'column'}}>
          <div>
            <TextField style={{margin:'1rem 0'}} id="outline-basic" label="Input Word" variant="outlined" size="small" value={word} onChange={e=> setWord(e.target.value)} />
            <Select
              style={{margin:'1rem'}}
              labelId="part-of-speech-label"
              id="part-of-speech"
              value={partOfSpeech}
              label="pos"
              size="small"
              onChange={e =>setPartOfSpeech(e.target.value)}
            >
              <MenuItem value='noun'>n.</MenuItem>
              <MenuItem value='verb'>v.</MenuItem>
              <MenuItem value='adjective'>adj.</MenuItem>
              <MenuItem value='adverb'>adv.</MenuItem>
              <MenuItem value='etc'>etc.</MenuItem>
            </Select>
          </div>
          <TextField style={{margin:'0 1rem'}} id="outline-basic" label="Definition" variant="outlined" size="small" value={definition} onChange={e=> setDefinition(e.target.value)} />
          <TextField style={{margin:'1rem'}} multiline minRows={2} id="outline-basic" label="Example" variant="outlined" value={examples} onChange={e=> setExamples(e.target.value)} />
          <Button style={{margin:'0 1rem 1rem 1rem'}} variant="contained" color="primary" onClick={addVocab} >Add Vocab</Button>
        </form>
      </Paper>
      {vocabList.map((vocab, index) => (
        <VocabCard
          word={vocab.word}
          meanings={vocab.meanings}
          favoriteToggle={handleFavorite(vocab)}
          isFavorite={vocab.isFavorite}
          key={index}
        />
      )
      )}
    </Container>
  )
}