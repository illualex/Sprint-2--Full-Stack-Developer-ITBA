import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Signup({ change }) {
  const methods = useForm()
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(true); // Inicializa showButtons

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    alert("Se ha iniciado sesion correctamente");
    navigate('/profile');
  });

  return (
    <>
      <div className="grid place-items-center">
        <FormProvider {...methods}>
          <form
            onSubmit={e => e.preventDefault()}
            noValidate
            className="text-center m-20 p-10 w-1/2 bg-neutral-400 rounded-xl"
          >
            <div className="grid">
              <Input
                label="Usuario"
                type="text"
                id="name"
                placeholder="Ingrese el usuario"
              />
              <br />
              <Input
                label="Contraseña"
                type="password"
                id="password"
                placeholder="Ingrese la contraseña"
              />
            </div>
            <div className="mt-5">
              <button
                onClick={onSubmit}
                className="btnRegistrarse"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </FormProvider>
        
      </div>
    </>
  )
}