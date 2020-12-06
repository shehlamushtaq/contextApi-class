import React,{useState,createContext} from 'react'
 export const ThemeContext2 = createContext();

export const ThemeContextProvider2 = ({children}) => {

    const [clr, setClr] = useState({
                                isLight : true,
                                 light :{bg:"pink" , text:"black"},
                                 dark : {bg:"black" , text:"white"},
    })





    return (
        <div>
            <ThemeContext2.Provider value={{...clr}}>
                {children}
            </ThemeContext2.Provider> 
        </div>
    )
}
