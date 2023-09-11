import '../components/css/price.css';


export default function Price() {

    
    return (
        <>
            <header><h1 className='text-center text-3xl'>Cotización de moneda</h1></header>
            <div className="container-converter">
                <section id="background">
                    <label htmlFor="text" className="sub-title">Ingresa el monto deseado a cambiar</label>
                    <input type="number" id="pesos" placeholder="Cantidad en pesos"/>
                        <section id="ops">
                            <select id="moneda">
                                <option value="dolar">Dólar</option>
                                <option value="euro">Euro</option>
                                <option value="real">Real</option>
                            </select>
                            <button id="btn">Convertir</button>
                        </section>
                        <label htmlFor="resultado" className="sub-title">El cambio final es de:</label>
                        <textarea placeholder="$$$" id="resultado" rows="1" cols="20"></textarea>
                </section>
            </div>

        </>
    )
}