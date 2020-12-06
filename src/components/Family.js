import React,{useState,useContext} from 'react'
import {BookContext2} from '../context/BookContext2'

export default function Family() {
    const {books } = useContext(BookContext2)
    console.log(books)
    return (
        <div>
            <ul>
                {books.map((item, ind)=><li key={item.ind}> Name of member {item.name}</li>)}
            </ul>
        </div>
    )
}
