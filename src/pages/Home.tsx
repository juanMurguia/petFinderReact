import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      <div className="contenedor-home h-dvh container mx-auto my-auto px-4 text-white justify-center items-center flex flex-col">
        <h1 className="text-3xl font-bold text-white">Pet Finder App React</h1>

        <h2 className="mb-5">
          Encontrá y reportá mascotas perdidas cerca de tu ubicación
        </h2>

        <div className=" flex flex-col gap-4">
          <button
            className="button-register rounded-full px-8 py-2 bg-green-600"
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>

          <button
            className="button-login rounded-full px-8 py-2 bg-green-950"
            onClick={handleLoginClick}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
