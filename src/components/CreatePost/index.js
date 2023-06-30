import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { PostContext } from '../PostContext';

const CreatePost = () => {
    const { textArea, CrearPost, GuardarPost } = useContext(PostContext)

    return (
        <div className='container mt-5 w-50'>
            <Form className='row'>
                <Form.Group className="mb-3 col-9" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>¿Qué piensas hoy?</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={textArea} 
                    name="textarea"
                    onChange={(event) => CrearPost(event.target.value)}
                    />
                </Form.Group>
                <Button className='col-3' onClick={GuardarPost}>
                    Enviar
                </Button>
            </Form>
        </div>
    );
}

export { CreatePost };