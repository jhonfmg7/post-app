import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://jhonmarmol.pythonanywhere.com" target="_blank" rel="noopener noreferrer">
                <img src="/img/logo.png" width="200px" alt="" />
            </a>
            <p className="footer-text">Autor: <em>Jhon Mármol Gómez</em></p>
            <p className="footer-text">Aplicación desarrollada para prueba técnica en Tita Media®</p>
        </footer>
    )
}

export default Footer