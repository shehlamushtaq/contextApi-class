import React, { useState, createContext } from 'react'

export const BookContext2 = createContext()

export const BookContextProvider2 = ({children}) => {
    const [books, setBooks] = useState([
                { name: 'shehla', author: 'Shehla Mushtaq' },
                { name: 'Aisha', author: 'Aisha Faisal' },
                { name: 'Noman', author: 'NomanMushtaq' },
                { name: 'sadia', author: 'Sadia Imran' }
            ]
    )
 const AddBook = (name,author) => {
     const newBook = {
                    name,
                    author
                    }
    setBooks([...books, newBook] )
 }

    return (
        <>
            <BookContext2.Provider value={{ books, AddBook }}>
                {children}
            </BookContext2.Provider>
        </>
    )

}
 