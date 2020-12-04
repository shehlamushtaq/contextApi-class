import React, { Component,createContext } from 'react'

export const BookContext = createContext()
export default class BookContextProvider extends Component {
    state = {
        books:
            [{name:'shehla', author:'Shehla Mushtaq'},
            {name:'Aisha', author:'Aisha Faisal'},
            {name:'Noman', author:'NomanMushtaq'},
            {name:'sadia', author:'Sadia Imran'}]
    
    }
    render() {
        console.log(this.props.children)
        return (
            
                <BookContext.Provider value={{...this.state}}>
                    {this.props.children}
                </BookContext.Provider>
            
        )
    }
}
