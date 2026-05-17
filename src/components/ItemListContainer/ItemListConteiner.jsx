import { use, useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //product es el nombre que va a tener el estado
  //setproducts es la funcion que va actualizar el estado. Siempre arranca con set
  //useState[] comienza con un array vacio

  // useEffect(() => {
  //   //Simulacion de una consulta a una base de datos o a una API
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

//useEffect para un json local


useEffect(() => { setLoading(true);
    
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error al cargar los productos:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

console.log(products);




  //SOLO es para ejemplo practico porque aun nos faltan temas por ver: NO ES LA MANERA CORRECTA
  // const arrayProducts = [
  // { id: 0, name: "Producto 1", description: "Descripcion 1", price: 123 },
  // { id: 1, name: "Producto 2", description: "Descripcion 2", price: 456 },
  // { id: 2, name: "Producto 3", description: "Descripcion 3", price: 789 },
  // ];

  //SIMULACION PROVISORIA de traer productos
  // const getProducts = () => {
  // setProducts(arrayProducts);
  // };

  // const clearProducts = () => {
  //     setProducts([]);
  // };

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      {/* <h1>Componente ItemListContainer</h1>
      <p>Este componente a futuro tendra logica y conexion a API</p>



      <button onClick={getProducts}>Traer productos</button>
      <button onClick={clearProducts}>Vaciar productos</button> */}

      <ItemList products={products} />
    </section>
  );

  //eventos onClick es un evento que se dispara cuando el usuario hace click en el boton. El valor de onClick es una funcion que se ejecuta cuando se dispara el evento.
  //En este caso, la funcion es getProducts, que actualiza el estado de products con el array de productos. Cuando se actualiza el estado, el componente se vuelve a renderizar y muestra la lista de productos en el ItemList. El segundo boton tiene un evento onClick que llama a la funcion clearProducts, que vacia el estado de products, lo que hace que el ItemList no muestre ningun producto.
};
