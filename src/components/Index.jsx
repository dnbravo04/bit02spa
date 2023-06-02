import workshop from "../images/workshop.jpg";
import imgage1 from "../images/workshop.png";
import imgage2 from "../images/mechanics.png";
import imgage3 from "../images/mechanicspc.png";

export const Index = () => {
  return (
    <>
      <div className="relative">
        <img
          className="mx-auto hover:blur-sm w-full mb-10 hover:transition-all "
          src={workshop}
        />
        <h1 className="bg-gray-800 text-neutral-200 absolute text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 text-center">
          Motorcycle Workshop Software
        </h1>
      </div>
      <div className="mx-5 grid grid-cols-3 grid-rows1 gap-10">
        <div className="text-center">
          <img
            src={imgage1}
            alt=""
            className="justify-center border-solid border-8 border-gray-600"
          />
        </div>
        <div className="text-center">
          <img
            src={imgage2}
            alt=""
            className="justify-center border-solid border-8 border-gray-700"
          />
        </div>
        <div className="text-center">
          <img
            src={imgage3}
            alt=""
            className="justify-center border-solid border-8 border-gray-800"
          />
        </div>
      </div>
      <div className="m-4">
        <p className="mx-auto p-9 text-2xl bg-slate-400 text-neutral-800 rounded-sm">
          Aquí encontrarás una solución innovadora y accesible diseñada para
          simplificar y optimizar la administración de tu taller. Nuestro
          sistema de código abierto ofrece una amplia gama de características y
          funcionalidades, desde la gestión de clientes y proveedores hasta el
          seguimiento de inventario y la programación de citas. Con una interfaz
          intuitiva y personalizable, podrás adaptar el sistema a las
          necesidades específicas de tu taller. Además, al ser de código
          abierto, te brindamos la libertad de modificar y mejorar el sistema
          según tus propias preferencias. ¡Descubre una nueva forma de gestionar
          tu taller de motocicletas de manera eficiente y sin restricciones con
          nuestro sistema de código abierto!
        </p>
      </div>
    </>
  );
};
