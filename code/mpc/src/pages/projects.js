import React from "react";
import Header from "@/components/Header";
import ImageGallery from 'react-image-gallery';

const projects = [
    {
        description: 'Dance Products: Ruby on Rails Ecommerce portfolio project ',
        original: '/images/mytestappjpd-sm.png',
        thumbnail: '/images/mytestappjpd-sm.png',
        embedUrl: 'https://youtu.be/PQXwOXdSj9U',
        originalWidth: '1024px',
        originalHeight: '640px'
    },

    {
        description: 'Fizz Buzz Interactive: Output to popular Fizz Buzz problem but interactive written in Ruby',
        original: '/images/fbi_ruby.png',
        thumbnail: '/images/fbi_ruby.png',
        originalWidth: '1024px',
        originalHeight: '640px'
    },

    {
        description: 'Habitica Abroad: Task webapp in C# & .Net framework',
        original: '/images/HabiticaAbroad_dashboad.PNG',
        thumbnail: '/images/HabiticaAbroad_dashboad.PNG',
        originalWidth: '1024px',
        originalHeight: '640px'
    },

    {
        description: 'Grand Circus Library: Console application written C#',
        original: '/images/GCLibrary_sc.PNG',
        thumbnail: '/images/GCLibrary_sc.PNG',
        originalWidth: '1024px',
        originalHeight: '640px'
    },

    {
        description: 'JD Music Player: Android mobile application that plays music via streaming url or local file',
        original: '/images/exoplayer_audio.png',
        thumbnail: '/images/exoplayer_audio.png',
        originalWidth: '600px',
        originalHeight: '1200px'
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