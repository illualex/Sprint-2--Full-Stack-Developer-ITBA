import '../components/css/lending.css';

export default function Lending() {
    return (

        <div className="flex w-full h-full">

            <div className="wraper">

                <header>
                    <h1> Bienvenido al area de prestamos</h1>
                </header>

                <section className="input-item">
                    <div>
                        <label htmlFor="amount" className="input--amount_label">ingrese su monto</label>
                        <input className="amount" type="number" name="amount" defaultValue="" />
                    </div>
                    <div>
                        <label htmlFor="month" className="input--amount_label">Cantidad de meses</label>
                        <input className="month" type="number" name="month" defaultValue="" />
                    </div>

                    <button className="calcular"> calcular</button>
                </section>

                <section className="results">
                    <div className="result--container">
                        <p className="amount-result"> Monto a devolver : </p>
                        <p className="month-tax"> Cuota mensual: </p>
                        <p className="tax"> Interes: </p>

                        <button className="verificacion calcular">Realizar operacion</button>

                    </div>


                </section>

                <section className="valueTaxes">
                    <table className="taxTable">
                        <tbody>
                            <tr className="tableTitle">
                                <td>meses:</td>
                                <td>intereses por mes:</td>
                            </tr>

                            <tr>
                                <td>1-3</td>
                                <td>2.5%</td>
                            </tr>

                            <tr>
                                <td>4-5</td>
                                <td>5%</td>
                            </tr>

                            <tr>
                                <td>6-9</td>
                                <td>7.5%</td>
                            </tr>

                            <tr>
                                <td>10-14</td>
                                <td>7.5%</td>
                            </tr>
                        </tbody>

                    </table>
                </section>
            </div>



        </div>

    )
}