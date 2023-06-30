import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './style.css'
import { useContext } from 'react';
import { PostContext } from '../PostContext';

const MostrarPost = ({ pub }) => {
    const { Like, DeletePost } = useContext(PostContext)
    return (
        <div className='container w-50 mt-5'>
            <Card className='shadow'>
                <Card.Body>{pub.text}</Card.Body>
                <Card.Footer className='text-center'>
                    <Button className='bg-transparent border-0' onClick={() => 
                        Like(pub.id)
                    }>
                        {
                            pub.isLike === true ?
                                <i className="bi bi-heart points2">{pub.likes}</i>
                                : <i className="bi bi-heart points"></i>
                        }
                    </Button>

                </Card.Footer>
                <Button
                    className='bg-transparent border-0 position-absolute top-0 start-100 translate-middle text-danger'
                    onClick={() => DeletePost(pub.id)}
                >
                    <i className="bi bi-trash points h4"></i>
                </Button>
            </Card>
        </div>
    );
}

export { MostrarPost };