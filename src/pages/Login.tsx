import { Button } from "primereact/button";

const Login = () => {
  return (
    <>
      <div className="flex justify-content-center align-items-center h-screen w-3 m-auto">
        <form className="w-full">
          <div className="card">
            <div className="field">
              <label htmlFor="user">Usuário</label>
              <input
                id="user"
                type="text"
                className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
            <div className="button">
              <Button label="Enviar" />
              <Button label="Cadastrar" className="p-button-help" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
