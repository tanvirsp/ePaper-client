/* eslint-disable react/prop-types */
import { useEffect, useState, createContext, useContext } from "react";



const PAPER_CONTEXT = createContext();

const ContentProvider = ({children}) => {

    const [paper, setPaper] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect( ()=>{
        fetch("data/data.json")
        .then(res => res.json())
        .then (data =>  {
            setPaper(data[0]);
            setLoading(false);
        })

    },[])

    const value ={paper, loading}

    return (
        <PAPER_CONTEXT.Provider value ={value}>
            {children}
        </PAPER_CONTEXT.Provider>
    );
};



export const usePaper =()=>{
    const context = useContext(PAPER_CONTEXT);
    return context;
}


export default ContentProvider;