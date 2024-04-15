import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
    const [dados, loading] = useFetch("/trilhas.json");
    const [trilhas, setTrilhas] = useState([]);

    useEffect(() => {
        if (!!dados && !loading) {
            setTrilhas(dados.trilhas);
        }
    }, [dados]);

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas, loading, dados}}>
            {children}
        </TrilhasContext.Provider>
    )
}
