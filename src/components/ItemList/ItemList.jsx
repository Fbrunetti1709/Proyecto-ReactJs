import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  if (products.length === 0) {
    return <p>No hay productos disponibles</p>;
  }

  //product es el nombre que le dimos a cada producto en el array de productos. El map recorre el array de productos y por cada producto, renderiza un componente Item, pasando las propiedades del producto como props al componente Item. El key es una prop especial que ayuda a React a identificar cada elemento de la lista de manera única,
  //lo que mejora el rendimiento al renderizar listas.

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};
//El componente Item es un componente funcional que recibe las props del producto y las muestra en el renderizado.
// El operador spread {...product} se utiliza para pasar todas las propiedades del producto como props al componente Item, lo que permite acceder a ellas directamente dentro del componente Item.
