import "./Item.css";


export const Item =({ name, description, price, image, children }) => {
    return (
        <articles className="card">
            <img src={image} alt={`foto de ${name}`} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            {children}
        </articles>
    );
}       




//El componente Item es un componente funcional que recibe las props del producto y las muestra en el renderizado. 
// En este caso, el componente Item muestra un nombre, una descripcion y un precio del producto. En el futuro, 
// se pueden agregar mas props al componente Item para mostrar mas informacion del producto.