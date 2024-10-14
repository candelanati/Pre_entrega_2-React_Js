import React, { useEffect, useState } from 'react';
import './Card.css';


function Card (){
const [data, setData] = useState([])

    useEffect(() => {
        fetch('/productos.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data.Productos);
        })
        .catch((error) => console.error('Error al cargar el JSON:', error));
    }, []);
    return(
        <>
            {data && data.map((producto)=>{
                console.log(producto.titulo)
                return(
                    <ProductBox key={producto.id} producto={producto}></ProductBox>
                )
            })} 
        </>
    );
}

function ProductBox ({producto}){
    return(
        <div>
            <img src={producto.imagen} alt={"portada poster "+producto.titulo} />
            
            <h3>{producto.titulo}</h3>
            <p>{producto.precio}</p>
            <button>ver más</button>
        </div>
    )
}

export default Card