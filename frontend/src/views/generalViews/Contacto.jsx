import React from "react";

const contactos = [
  {
    nombre: "Juan Pérez",
    cargo: "Gerente de Ventas",
    telefono: "+99 0214 555 1122",
    email: "juan.perez@tostaduria.com",
    descripcion:
      "Juan es responsable de coordinar las ventas y asegurar que nuestros productos lleguen a cada cliente en perfectas condiciones. No dudes en contactarlo para cualquier consulta sobre nuestros productos.",
    fondo: "bg-white",
  },
  {
    nombre: "Ana Ramírez",
    cargo: "Atención al Cliente",
    telefono: "+99 0214 555 3344",
    email: "ana.ramirez@tostaduria.com",
    descripcion:
      "Ana es nuestra experta en atención al cliente. Si tienes alguna pregunta sobre nuestros productos, pedidos o envíos, ella estará encantada de ayudarte en todo lo que necesites.",
    fondo: "bg-white",
  },
  {
    nombre: "Carlos López",
    cargo: "Encargado de Producción",
    telefono: "+99 0214 555 6677",
    email: "carlos.lopez@tostaduria.com",
    descripcion:
      "Carlos supervisa todo el proceso de producción de nuestros cafés. Desde la selección de los granos hasta el tostado final, Carlos asegura la calidad en cada etapa.",
    fondo: "bg-white",
  },
];

const Contacto = () => {
  return (
    <div className="px-5 py-10 md:px-20">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Contacto</h1>
      <p className="text-gray-700 mb-8">
        Si tienes alguna pregunta o deseas comunicarte con alguno de nuestros representantes, no dudes en contactarnos. Estamos aquí para ayudarte.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactos.map((persona, index) => (
          <div
            key={index}
            className={`${persona.fondo} p-6 rounded-lg shadow-lg`}
          >
            <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
              {persona.nombre}
            </h2>
            <p className="text-gray-700 mb-2">{persona.cargo}</p>
            <p className="text-gray-600">📞 {persona.telefono}</p>
            <p className="text-gray-600">📧 {persona.email}</p>
            <p className="text-gray-700 mt-4">{persona.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contacto;
