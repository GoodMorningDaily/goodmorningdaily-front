import "./HeaderClient.css";
import { Menubar } from "primereact/menubar";

function HeaderClient() {
  const items = [
    {
      label: "Sobre",
      icon: "pi pi-file",
      command: () => {
        window.location.hash = "#sobre";
      },
    },
    {
      label: "Recursos",
      icon: "pi pi-pencil",
      command: () => {
        window.location.hash = "#recursos";
      },
    },
    {
      label: "Benefícios",
      icon: "pi pi-heart-fill",
      command: () => {
        window.location.hash = "#beneficios";
      },
    },
    {
      label: "Acessar",
      icon: "pi pi-file-edit",
      command: () => {
        window.location.pathname = "/login";
      },
    },
  ];

  return (
    <>
      <div className="w-full h-6rem bg-cyan-700">
        <div className="h-6rem ml-3 flex align-items-center  justify-content-between">
          <p className="logoHeader text-white">Good Morning Daily</p>
          <div className="mr-3">
            <Menubar model={items} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderClient;
