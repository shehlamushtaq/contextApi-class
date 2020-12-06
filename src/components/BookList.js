import React,{useState,useContext, useEffect} from 'react'
import {ThemeContext} from '../context/ThemeContext';
import {ThemeContext2} from '../context/ThemeContext2';
import {BookContext} from '../context/BookContext'
import {BookContext2} from '../context/BookContext2'
function BookList() {
        const {isLight,light,dark} = useContext(ThemeContext2)
        const ui = isLight ? light : dark;

        const {books , AddBook}= useContext(BookContext2)
        console.log(books)

        useEffect(()=>{
            AddBook("Farheen","Iqtidar")
        },[])


    // const [books, setBooks] = useState([
    //     {name:'shehla', author:'Shehla Mushtaq'},
    //     {name:'Aisha', author:'Aisha Faisal'},
    //     {name:'Noman', author:'NomanMushtaq'},
    //     {name:'sadia', author:'Sadia Imran'}
    // ])

    console.log(ui);
    
    return (
        <div style={{backgroundColor:ui.bg, color:ui.text}}>
            <button onClick={()=>AddBook("sahar","Iqtidar")}>Add</button>
            <ul>
                {books.map(
                    (item) =>
                <li key={item.name}>{item.name} is {item.author}</li>)}

            </ul>
        </div>
    )
}

export default BookList
