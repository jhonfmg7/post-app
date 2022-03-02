import React, { useEffect, useState } from 'react'

const Modal = ({ isOpen, setIsOpen, children }) => {

    // Local State
    const [ open, setOpen ] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setOpen(true)
            }, 100);
        } else {
            setTimeout(() => {
                setOpen(false)
            }, 100);
        }
    }, [ isOpen ]);

    return (
        <main className={ open ? "modal-container" : "modal-container hidden"}>
            <section className={ open ? "black-screen" : "black-screen hidden"} onClick={ () => setIsOpen(false) }></section>
            <section className={ open ? "modal-image" : "modal-image hidden"}>
                { children }
            </section>
        </main>
    )
}

export default Modal