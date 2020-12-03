import React, { Component, createContext } from 'react'
export const ThemeContext = createContext()


export default class ThemeContextProvider extends Component {
state={
    islight:false,
    light:{bg:"pink" , text:"black"},
    dark:{bg:"black" , text:"white"}
}
    render(){
        console.log(this.props.children)
    return (
        <ThemeContext.Provider value={{...this.state}}>
            {this.props.children}
        </ThemeContext.Provider>
            
        
         )
    }
}