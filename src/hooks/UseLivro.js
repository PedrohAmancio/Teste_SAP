const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from 'react';

export function useInserirLivro(){
    const inserirLivro = async (data) =>{
     const req = await fetch(`${url}/livros`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        
    );
        const res = await req.json()
        return res;
    };
        return {inserirLivro};
}
export function useDeletaLivro(){
    const deletarLivro = async (idLivro)=>{
        const req = await fetch(`${url}/livros/${idLivro}`, 
        {
            method: "DELETE",
        });
        const res = req.json();
        return res;
    };
    return{deletarLivro}
}
export function useListaLivros(){
    const [livros, setLivros]= useState([])
 useEffect(()=>{
        async function fetchData(){
            try{
                const req = await fetch(`${url}/livros`);
                const res= await req.json();
                setLivros(res); 
            }catch(erro){
                console.log(erro)
            }
        }
        fetchData()
 },[])
 return livros
}

export function useBuscarLivroPorId(){
        const buscarLivro = async (idLivro)=>{
            const req = await fetch(`${url}/livros/${idLivro}`);
            const res = await req.json()
            return res 
        }

        return{buscarLivro}

}
export function useAtualizaLivro(){
     const atualizaLivro = async (data,idLivro) =>{
     const req = await fetch(`${url}/livros/${idLivro}`, 
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        
    );
        const res = await req.json()
        console.log(res)
        return res;
    };
        return {atualizaLivro};
}