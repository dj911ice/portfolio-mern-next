import React from "react";
import Header from "@/components/Header";
import ImageGallery from 'react-image-gallery';

const projects = [
    {
        original: '/images/mytestappjpd-sm.png',
        thumbnail: '/images/mytestappjpd-sm.png',
        embedUrl: 'https://youtu.be/PQXwOXdSj9U',
        description: 'Dance Products',
        originalWidth: '1280px',
        originalHeight: '800px'
    },

    {
        description: 'Fizz Buzz Interactive (Ruby)',
        original: '/images/fbi_ruby.png',
        thumbnail: '/images/fbi_ruby.png',
        originalWidth: '1280px',
        originalHeight: '800px'
    },

    {
        description: 'Habitica Abroad',
        original: '/images/HabiticaAbroad_dashboad.PNG',
        thumbnail: '/images/HabiticaAbroad_dashboad.PNG',
        originalWidth: '1280px',
        originalHeight: '800px'
    },

    {
        description: 'Grand Circus Library',
        original: '/images/GCLibrary_sc.PNG',
        thumbnail: '/images/GCLibrary_sc.PNG',
        originalWidth: '1280px',
        originalHeight: '800px'
    },

    {
        description: 'JD Music Player',
        original: '/images/exoplayer_audio.png',
        thumbnail: '/images/exoplayer_audio.png',
        originalWidth: '1080px',
        originalHeight: '2160px'
    }
]

function Projects() {

    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Awesome Projects</h2>
                    <div>
                        <ImageGallery items={projects} />
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Projects