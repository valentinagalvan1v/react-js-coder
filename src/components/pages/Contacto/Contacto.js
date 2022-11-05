import { useState } from "react"
import Footer from "../../Footer"

export default function Contacto() {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");

    return <>
        <div className="Home">
            <div className="Portada">
                <div className="TextRight">
                    <div>
                    </div>
                    <div className="TextPortada">
                        <h1>Contacto</h1>
                        <p>Dejanos tu consulta o comentario :)
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="FormContainer">
            <form action="">
                <input type="text" placeholder="Nombre" onChange={(e)=>{setNombre(e.target.value)}} value={nombre}/>
                <input type="text" placeholder="Teléfono" onChange={(e)=>{setTelefono(e.target.value)}} value={telefono}/>
                <textarea rows="5" cols="60" name="description" onChange={(e)=>{setMensaje(e.target.value)}} value={mensaje} placeholder={'Mensaje'} />
                <button>Enviar</button>
            </form>
        </div>
        <Footer></Footer>
    </>

}