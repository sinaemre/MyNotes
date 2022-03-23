import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { Button, Col, Container, Row, ListGroup, Form } from 'react-bootstrap';

const API_URL = "https://localhost:5001/";
function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({id:0, title:"", content:""} );
  
  useEffect(() => {
    
    axios.get(API_URL + "api/Notes")
    .then(function(response){
      setNotes(response.data);
      if(response.data.length > 0)
        setSelectedNote(response.data[0]);
    });
  }, []);

  const selectNote = function(note) {
    setSelectedNote({...note});
  };

  return (
    <div className="App">
      <Container fluid="md" className='mt-3'>
        <Row>
          <Col sm={4} lg={3}>
            <div className='d-flex'>
              <h2 className='me-auto'>Notlarım</h2>
              <Button variant='success'>
                New
              </Button>
            </div>
            <ListGroup className="mt-3">
              {notes.map((note,index) => 
                <ListGroup.Item action active={note.id == selectedNote.id} onClick={() => selectedNote(note)}>
                  {note.title}
                </ListGroup.Item>
              )}
            </ListGroup>,
          </Col>
          {selectedNote &&
            <Col sm={8} lg={9}>
              
              <Form.Control type="text" placeholder="Title" value={selectedNote.title} onChange={(e) => 
                setSelectedNote({...selectedNote, title : e.target.value})} />
              
              <Form.Control as="textarea" rows={9} placeholder="Content" value={selectedNote.content} className='my-3' onChange={(e) => 
                setSelectedNote({...selectedNote, content : e.target.value})}/>
                <div>
                  {selectedNote.title}
                  {selectedNote.content}  
                </div>

              <div className='mt-3 d-flex justify-content-end'>
                <Button variant='danger' className='me-2'>Sil</Button>
                <Button>Kaydet</Button>
              </div>
            </Col>
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
