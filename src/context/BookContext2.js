import React, { useState, createContext } from 'react'

export const BookContext2 = createContext()

export const BookContextProvider2 = (props) => {
    const [books, setBooks] = useState([
                { name: 'shehla', author: 'Shehla Mushtaq' },
                { name: 'Aisha', author: 'Aisha Faisal' },
                { name: 'Noman', author: 'NomanMushtaq' },
                { name: 'sadia', author: 'Sadia Imran' }
            ]
    )
// const AddBook (name,auther){
//     setBooks({...books,} )
// }

    return (
        <>
            <BookContext2.Provider value={{ books }}>
                {props.children}
            </BookContext2.Provider>
        </>
    )

}
 