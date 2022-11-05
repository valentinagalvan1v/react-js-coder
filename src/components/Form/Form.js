import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { ContextCart } from '../../contexts/ContextCart';
import { database } from '../../services/firebaseConfig';
import { Link } from 'react-router-dom';


export default function Form() {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail1, setMail1] = useState('')
    const [mail2, setMail2] = useState('')

    const { cart, totalPrice, deleteAll } = useContext(ContextCart);
    const [orderId, setOrderId] = useState('');

    const clickSubmit = (e) => {
        e.preventDefault();
        let mail
        if (mail1 === mail2) {
            mail = mail2
        } else {
            alert('Mail no coincide')
        }
        const order = {
            consumer: { nombre, apellido, direccion, telefono, mail },
            items: cart,
            total: totalPrice(),
            date: serverTimestamp(),
        };

        const collectionOrder = collection(database, 'orders')
        addDoc(collectionOrder, order)
            .then((res) => {
                setOrderId(res.id)
                deleteAll()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (orderId) {
        return (
            <div className='orderRecap'>
                <h1>Gracias por tu compra {nombre}!</h1>
                <p>Tu número de seguimiento es: {orderId}</p>
                <br /><br />
                <Link to={'/'}>Volver al inicio</Link>
            </div>

        )
    }

    return (
        <div className='FormContainer'>
            <form onSubmit={clickSubmit} action="">
                <h1>Datos de compra</h1>
                <input type="text" name="nombre" id="" placeholder='Nombre' onChange={(e) => { setNombre(e.target.value) }} value={nombre} required />
                <input type="text" name="apellido" id="" placeholder='Apellido' onChange={(e) => { setApellido(e.target.value) }} value={apellido} required />
                <input type="text" name="direccion" id="" placeholder='Dirección' onChange={(e) => { setDireccion(e.target.value) }} value={direccion} required />
                <input type="text" name="teléfono" id="" placeholder='Teléfono' onChange={(e) => { setTelefono(e.target.value) }} value={telefono} required />
                <input type="text" name="mail" id="" placeholder='Mail' onChange={(e) => { setMail1(e.target.value) }} value={mail1} required />
                <input type="text" name="mail" id="" placeholder='Verificación Mail' onChange={(e) => { setMail2(e.target.value) }} value={mail2} required />
                <button>Enviar</button>
            </form>
        </div>
    )
}
