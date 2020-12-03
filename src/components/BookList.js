import React,{useState,useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
function BookList() {
        const {islight,light,dark} = useContext(ThemeContext)
        const ui = islight ? light : dark;



    const [books, setBooks] = useState([
        {name:'shehla', author:'Shehla Mushtaq'},
        {name:'Aisha', author:'Aisha Faisal'},
        {name:'Noman', author:'NomanMushtaq'},
        {name:'sadia', author:'Sadia Imran'}
    ])
    return (
        <div style={{backgroundColor:ui.bg, color:ui.text}}>
            <ul>
                {books.map((item)=>
                <li key={item.name}>{item.name} is {item.author}</li>)}
            </ul>
        </div>
    )
}

export default BookList