"use client";

import { useState, useEffect } from "react";
import './imageSlider.css'; // Assurez-vous d'importer le fichier CSS

const ImageSlider = () => {
    const images = [
        "/Img/picture1.jpg",
        "/Img/picture2.jpg",
        "/Img/picture3.jpg",
        "/Img/picture4.jpg",
        "/Img/picture5.jpg",
    ];

    const messages = [
        "Welcome to hospitale ZAGORA-FUTURE!",
        "We are glad to have you here.",
        "Explore our services and enjoy your stay.",
        "Votre sante est notre priorite.",
        "Nous somemes la pour vous !"
    ];

    const [index, setIndex] = useState(0); // Garde l'index de l'image actuelle
    const [messageIndex, setMessageIndex] = useState(0); // Garde l'index du message actuel

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
            setMessageIndex((prevMessageIndex) => (prevMessageIndex + 1) % messages.length);
        }, 5000); // Change d'image et de message toutes les 5 secondes

        return () => clearInterval(interval); // Nettoie l'intervalle quand le composant se démonte
    }, []);

    return (
        <div className="slider-container">
            <div className="background-slider" style={{ backgroundImage: `url(${images[index]})` }}>
                <div className="slider-text">
                    <h1>{messages[messageIndex]}</h1>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;