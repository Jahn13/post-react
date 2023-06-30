import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap'
import { PostContext } from '../PostContext';
import { MostrarPost } from '../MostrarPost';

const PaginationTable = () => {
    //Indica los Post por pagina que aparecen
    const postByPage = 3;

    const { publicaciones } = useContext(PostContext)
    const [post, setPost] = useState([])
    const [active, setActive] = useState(1)

    useEffect(() => {
        cargarPostPage(active);
    }, [publicaciones])
    //Pagina Activa donde iniciara el componente

    //Calculo el total de Paginas que necesito
    const totalPage = Math.ceil(publicaciones.length / postByPage)

    //guarda los botones de la paginacion
    let items = [];
    //Agrega a Items el total de botones para cada pagina.
    for (let number = 1; number <= totalPage; number++) {
        items.push(
            <Pagination.Item onClick={() => cargarPostPage(number)} key={number} active={active === number}>
                {number}
            </Pagination.Item>,
        );
    }
    const publicacionesPagination = [];

    //Crear La Data que se va a presentar en la pagina.

    const cargarPostPage = (value) => {
        let start = (value - 1) * postByPage;
        let final = start + postByPage;

        for (let i = start; i <= final - 1; i++) {
            if (publicaciones[i] !== undefined) {
                publicacionesPagination.push(publicaciones[i])
            }
        }
        setPost(publicacionesPagination)
        setActive(value)
    }

    return (
        <>
            {post.map((element, index) => (
                <MostrarPost key={index}
                    pub={element}
                    >
                    
                </MostrarPost>
            ))
            }
            <div className='position-absolute bottom-0 start-50 translate-middle-x'>
                <Pagination>{items}</Pagination>
            </div>
        </>
    )
}

export { PaginationTable }