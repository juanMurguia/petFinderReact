import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogIn } from "../hooks/useLogIn";
import { useLogOut } from "../hooks/useLogOut";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const logIn = useLogIn();
  const onSubmit = async (data) => {
    const emailValue = data.email;
    const passValue = data.password;
    if (emailValue && passValue) {
      try {
        await logIn(emailValue, passValue);
      } catch (error) {
        console.log("error en login:", error);
      }
    }
  };

  return (
    <>
      <div className="contenedor-home h-dvh container mx-auto my-auto px-4 text-white justify-center items-center flex flex-col">
        <h1 className="text-3xl font-bold text-white">Inicia sesión</h1>

        <h2 className="mb-5 fw-light">Ingresa tus datos</h2>

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
            <p className="paragraph-02">
              ¿Aún no estás registrado?{" "}
              <Link to="/sign-up" className="text-slate-400">
                Registrate acá
              </Link>
            </p>
            <div className="button-next">
              <button
                type="submit"
                className="button-register rounded-full w-full px-8 py-2 bg-green-600"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
