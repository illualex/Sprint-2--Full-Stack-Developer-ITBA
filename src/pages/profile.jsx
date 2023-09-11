import '../App.css';
import '../components/css/profile.css';
import creditCard from "../assets/images/credit-card/credit-card-visa.png"

export default function Profile() {

    return (
        <>
            <div className="userName">
                <h1 className="h1UserProfile">Bienvenido, Maxi! </h1>
            </div>

            <div className="container-creditCard">
                <div className="credit-card">
                    <img className="imgCreditCard" src={creditCard} alt="Tu tarjeta de credito" />
                </div>

                <div className="dates">
                    <div className="datesUser">
                        <p className="pDatos">Saldo:</p>
                        <h2 className="saldoActual"></h2><br />

                        <p className="pDatos">Name :</p>
                        <h2 className="h2Datos">Maxi</h2>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-center g-50 my-25 flex-col">
                <section className="main-container">

                    <h3 className="box-title">Transferencia</h3>

                    <div className="input-form">
                        <label htmlFor="nombre">Destinatario:</label>
                        <input type="text" id="transfer-destiny" placeholder="Ingresa CBU o Alias" />
                    </div>

                    <div className="input-form">
                        <label htmlFor="nombre">Monto:</label>
                        <input type="number" className="transfer-amount" placeholder="Ingresa el monto" />
                    </div>

                    <div className="acc-btn">
                        <button className="trasferencia" id="trf-btn">Realizar transferencia</button>
                    </div>

                </section>

                <section className="main-container">

                    <h3 className="box-title">Pago</h3>

                    <div className="input-form">
                        <label htmlFor="nombre">Destinatario:</label>
                        <input type="text" id="pay-destiny" placeholder="Ingresa el numero de la factura" />
                    </div>

                    <div className="input-form">
                        <label htmlFor="nombre">Monto:</label>
                        <input type="number" className="transfer-amount pay-amount" placeholder="Ingresa el monto" />
                    </div>

                    <div className="acc-btn">
                        <button type="submit" className="pagar" id="pay-btn">Realizar pago</button>
                    </div>

                    <div id="msj-container"></div>

                </section>
            </div>
        </>
    )
}
