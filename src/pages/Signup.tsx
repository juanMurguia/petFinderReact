import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignUp } from "../hooks/useSignUp";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signUp = useSignUp();
  const onSubmit = async (data) => {
    const emailValue = data.email;
    const passValue = data.password;
    const checkpassValue = data.checkpass;
    if (emailValue && passValue && checkpassValue) {
      if (passValue === checkpassValue) {
        try {
          await signUp(emailValue, passValue);
        } catch (error) {
          console.log("error en login:", error);
        }
      }
    }
  };

  return (
    <>
      <div className="contenedor-home h-dvh container mx-auto my-auto px-4 text-white justify-center items-center flex flex-col">
        <h1 className="text-3xl font-bold text-white">Registrate</h1>

        <h2 className="mb-5 fw-light">Ingresa tus datos para registrarte</h2>

        <div className="flex flex-col gap-4 mt-5 justify-items-center items-center">
          <form
            className="login-form flex flex-col gap-4 bg-zinc-900 items-center text-slate-950"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              name="email"
              className="py-2 px-8 rounded-full text-slate-950 bg-zinc-900  active:bg-zinc-900 "
              placeholder="test@test.com"
              {...register("email")}
            />
            <input
              type="password"
              name="pass"
              className="py-2 px-8 rounded-full bg-zinc-900text-slate-950"
              placeholder="Tu contraseña"
              {...register("password")}
            />
            <input
              type="password"
              name="pass"
              className="py-2 px-8 rounded-full bg-zinc-900text-slate-950"
              placeholder="Confirma tu contraseña"
              {...register("checkpass")}
            />
            <p className="paragraph-02">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-slate-400">
                Inicia sesión
              </Link>
            </p>
            <div className="button-next">
              <button
                type="submit"
                className="button-register rounded-full w-full px-8 py-2 bg-green-600"
              >
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
