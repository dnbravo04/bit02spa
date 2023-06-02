import Formulario from "./Formulario";

export const AboutUs = () => {
  return (
    <>
      <div className="m-4 mx-auto p-4">
        <h2 className="text-teal-600 text-center text-4xl font-bold mb-4">
          Características de Motorcycle Workshop Software
        </h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <strong className="underline text-2xl decoration-red-500">
              Gestión de clientes:
            </strong>{" "}
            Permite almacenar y gestionar la información de los clientes,
            incluyendo datos personales, historial de servicios y reparaciones,
            y notas adicionales.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-orange-500">
              Gestión de órdenes de trabajo:
            </strong>{" "}
            Facilita la creación y seguimiento de órdenes de trabajo, desde la
            solicitud de servicio hasta la finalización y facturación,
            incluyendo detalles de la motocicleta, lista de tareas y tiempo
            estimado.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-amber-500">
              Programación de citas:
            </strong>{" "}
            Permite programar y administrar citas con clientes de manera
            eficiente, evitando conflictos y optimizando la planificación del
            taller.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-yellow-500">
              Inventario de repuestos:
            </strong>{" "}
            Permite gestionar y controlar el inventario de repuestos y
            accesorios, incluyendo la cantidad disponible, registros de entradas
            y salidas, y notificaciones de reabastecimiento.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-lime-500">
              Facturación y pagos:
            </strong>{" "}
            Ofrece funcionalidades para generar facturas y gestionar los pagos
            de los servicios realizados, incluyendo opciones de pago en
            efectivo, tarjeta de crédito y transferencia bancaria.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-green-500">
              Informes y análisis:
            </strong>{" "}
            Proporciona informes detallados sobre el desempeño del taller, como
            ingresos, servicios más solicitados, tiempos de reparación, entre
            otros, para facilitar la toma de decisiones basada en datos.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-teal-500">
              Integración de proveedores:
            </strong>{" "}
            Permite gestionar los proveedores de repuestos y accesorios,
            incluyendo la generación de órdenes de compra y seguimiento de
            entregas.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-cyan-500">
              Recordatorios y notificaciones:
            </strong>{" "}
            Envía recordatorios automáticos a los clientes para mantenimiento
            programado, vencimiento de garantías y otras fechas importantes, así
            como notificaciones internas para el personal del taller.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-indigo-500">
              Seguridad y respaldo:
            </strong>{" "}
            Garantiza la seguridad de los datos del taller mediante
            autenticación de usuarios, roles y permisos, y realiza respaldos
            automáticos para evitar pérdida de información.
          </li>
          <li className="mb-2">
            <strong className="underline text-2xl decoration-violet-500">
              Personalización y usabilidad:
            </strong>{" "}
            Permite personalizar el software según las necesidades específicas
            del taller, adaptando campos, formularios y etiquetas, y ofrece una
            interfaz intuitiva y fácil de usar para una experiencia de usuario
            fluida.
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-5">
        <div><Formulario /></div>
        <div></div>
      </div>
    </>
  );
};
