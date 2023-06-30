import React, { createContext, useState } from 'react';

const PostContext = createContext()

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = useState(parsedItem);
  
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    return [item, saveItem]
    // localStorage.setItem('PUB_v1', JSON.stringify(item));
    // localStorage.removeItem('PUB_v1');
  }

const PostProvider = ({children}) => {
    const [publicaciones, savePub] = useLocalStorage('PUB_v1', [])
    const [textArea, setTextArea] = useState()
    
    const CrearPost = (text) => {
        setTextArea(text)
    }

    const DeletePost = (id) => {
        const pub = [...publicaciones]
        const index = pub.findIndex(item => item.id === id)
        pub.splice(index, 1)
        savePub(pub)
    }

    const GuardarPost = () => {
        const id = Math.random().toString(36).slice(2, 7);
        savePub([...publicaciones, {id: id, text: textArea, isLike: false, likes: 0}])
    }

    const Like = (id) => {
        const pub = [...publicaciones];
        const index = pub.findIndex(item => item.id === id)
        pub[index].isLike = true;
        pub[index].likes++;
        savePub(pub)
    }

    return (
        <PostContext.Provider value={{
            textArea,
            CrearPost,
            publicaciones,
            savePub,
            GuardarPost,
            Like,
            DeletePost,
        }}>
            {children}
        </PostContext.Provider>
    );
}

export { PostProvider, PostContext };