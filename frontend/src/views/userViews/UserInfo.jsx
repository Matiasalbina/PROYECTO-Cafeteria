import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from "../../components/layouts/Button";

export const UserInfo = () => {

  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users"); 
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error al obtener users:", error);
      }
    };
    fetchUsers();
  }, []);

  console.log(userInfo)

  return (
   <>
    <div className="bg-white w-full flex flex-col gap-5 px-3 py-6 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      {/* Sidebar */}
      <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 py-8 px-4 text-sm border-r border-negro-100 top-12">
          <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white text-negro-900 border rounded-full">
            Mi cuenta
          </a>
          <Link to="/acceso-seguridad">
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-negro-900 hover:border hover:rounded-full">Acceso y seguridad</a>
          </Link>
          <Link to="/edit-post">
          <a href="#" className="flex items-center px-3 py-2.5 font-semibold hover:text-negro-900 hover:border hover:rounded-full">Tu artículos de blog</a>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">Perfil público</h2>

            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-negro-300"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Bordered avatar"
                />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <Button text="cambiar imagen"/>
                  <Button text="Borrar foto" bg="bg-naranja"/>
                </div>
              </div>

              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-negro-900">
                      Primer nombre*
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                      placeholder="Ingesa tu nombre"
                      defaultValue=""
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-negro-900">
                      Apellido*
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                      placeholder="Ingresa tu apellido"
                      defaultValue=""
                      required
                    />
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-negro-900">
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                    placeholder="tu.email@mail.com"
                    required
                  />
                </div>

                <div className="mb-2 sm:mb-6">
                  <label htmlFor="profession" className="block mb-2 text-sm font-medium text-negro-900">
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="bg-negro-50 border border-negro-300 text-negro-900 text-sm rounded-lg focus:ring-negro-500 focus:border-negro-500 block w-full p-2.5"
                    placeholder=""
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-negro-900">
                    Bio
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-negro-900 bg-negro-50 rounded-lg border border-negro-300 focus:ring-negro-500 focus:border-negro-500"
                    placeholder="Escribe tu biografía aquí..."
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <Button text="Guardar"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};
