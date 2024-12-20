import Title from "../../components/layouts/Title";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Card from "../../components/layouts/Card";
import PriceFilter from "../../components/layouts/PriceFilter";

const ProductGallery = () => {
  const { Productos, agregarAlCarrito } = useContext(ProductContext);
  const [sortOrder, setSortOrder] = useState("");

  // Ordenar los productos en función del valor de sortOrder
  const sortedProductos = Productos ? [...Productos] : [];
  if (sortOrder === "asc") {
    sortedProductos.sort((a, b) => Number(a.precio) - Number(b.precio));
  } else if (sortOrder === "desc") {
    sortedProductos.sort((a, b) => Number(b.precio) - Number(a.precio));
  }

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-5">
        <Title title="Todos los productos" />
        <PriceFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <div className="text-center">
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mb-5"
        >
          {sortedProductos.length > 0 ? (
            sortedProductos.map((producto, index) => (
              <Card 
                key={`${producto.id}-${index}`} // Combina id e índice como clave para evitar duplicados
                producto={producto} 
                agregarAlCarrito={agregarAlCarrito} 
              />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductGallery;
