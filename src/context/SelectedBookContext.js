import { createContext, useState } from "react";

export const SelectedBookContext = createContext({
    selectedBook:null,
    setSelectedBook:()=>null
})

export const SelectedBookProvider = ({children})=>{
    const [selectedBook,setSelectedBook]= useState(null)
    const value={selectedBook,setSelectedBook}
    return (
        <SelectedBookContext.Provider value={value}>{children}</SelectedBookContext.Provider>
    )
}
