import Head from 'next/head'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import React from "react";

// const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Justin P. Dickerson | SWE</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <section>
                    <h2>Professional Site</h2>
                    <h3>Introduction</h3>
                    <p>
                        Greetings and welcome to my professional website! My name is Justin Dickerson a freelance
                        software engineer. Interested in hiring or booking me? Download my resume and send me an email
                        along with a description of the job or project requirements. I will gladly review and reach out
                        if there is potential fit. Have a wonderful day!
                    </p>

                    <h3>About</h3>
                    <p>
                        Welcome to the redesign of my professional site. The website utilizes Next.js within the MERN
                        architecture. With Next.js, the site is able to take full advantage of automatic routing.
                    </p>

                    <h2>Resume/CV</h2>
                    <div className={"resume"}>
                        <a href={"/resume/JPDSWEResume_070923.pdf"} target={"_blank"}>
                            <button id={"pdf"}>Resume PDF</button>
                        </a>
                        <a href={"/resume/JPDSWEResume_070923.docx"}>
                            <button id={"docx"}>Resume DOCX</button>
                        </a>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}
