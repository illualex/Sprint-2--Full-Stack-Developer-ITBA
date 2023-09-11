import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { Link, useNavigate } from "react-router-dom";


export default function Signup () {
    const methods = useForm()
    const navigate = useNavigate();
  
    const onSubmit = methods.handleSubmit(data => {
      console.log(data)
      alert("Se ha iniciado sesion correctamente");
      navigate('/profile');
    })
  
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          className="container"
        >
          <div className="grid">
            <Input
              label="username"
              type="text"

              id="name"
              placeholder="Usuario"
            />
            <Input
              label="password"
              type="password"
              id="password"
              placeholder="Contraseña"
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
    )
  }