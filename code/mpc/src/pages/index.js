import Head from 'next/head'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
import React from "react";

// const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [resumeValue, setResumeValue] = React.useState(0);

    function resumeDownload (resumeValue) {
        if (resumeValue === 0) {

        } else if (resumeValue === 1) {
            return (
                <>
                    <a href={"/resume/JPDSWEResume_090223.pdf"} target={"_blank"}>
                        <button id={"pdf"}>Full Resume PDF</button>
                    </a> &nbsp;
                    <a href={"/resume/JPDSWEResume_090223.docx"}>
                        <button id={"docx"}>Full Resume DOCX</button>
                    </a>
                </>

            )

        } else if (resumeValue === 2) {
            return (
                <>
                    <a href={"/resume/JPDResume_090423.pdf"} target={"_blank"}>
                        <button id={"pdf"}>Short Resume PDF</button>
                    </a> &nbsp;
                    <a href={"/resume/JPDResume_090423.docx"}>
                        <button id={"docx"}>Short Resume DOCX</button>
                    </a>
                </>

            )
        } else if (resumeValue === 3) {
            return (
                <>
                    <a href={"/resume/JPD_Credential_Background_Summary.pdf"} target={"_blank"}>
                        <button id={"pdf"}>Credential Summary PDF</button>
                    </a> &nbsp;
                    <a href={"/resume/JPD_Credential_Background_Summary.docx"}>
                        <button id={"docx"}>Credential Summary DOCX</button>
                    </a>
                </>
            )
        }
    }

    return (
        <>
            <Head>
                <title>Justin P. Dickerson | SWE</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <section>
                    <h2>Professional Site</h2>
                    <h3>Introduction</h3>
                    <p>
                        I am Justin Dickerson, a software engineering professional and welcome to my redesigned website.
                        A sampling of technologies that I work with include .Net/C#, MERN w/ Next.js, and Ruby on Rails
                        along with Android for mobile devices. Additionally, have exposure to the following programming
                        languages: Java, Kotlin, Python, JavaScript, and others. Within the projects section of the
                        website, Tailwind CSS & Material Tailwind is utilized to create the scoped slideshow. Interested
                        in offering employment, then my resume can be viewed/downloaded via the buttons below for the
                        preferred format. A recruiter? Download my resume and send an email along with a job
                        description/project requirements. All requests are reviewed and will reach out if there is a
                        potential fit. Have a wonderful day!
                    </p>

                    <h2>Resume/CV</h2>
                    <section className={"resume"}>
                        <form>
                            <select className={"center-middle"}
                                    name={"resumeValue"}
                                    id="resumeValue"
                                    value={resumeValue}
                                    onChange={e => {
                                        setResumeValue(parseInt(e.target.value))
                                    }}>
                                <option disabled={false} value={0}>Select to Download</option>
                                <option value={1}>Full Resume</option>
                                <option value={2}>Short Resume</option>
                                <option value={3}>Credential Summary</option>
                            </select>
                        </form>
                        {resumeDownload(resumeValue)}
                    </section>

                    <h3>About</h3>
                    <p>
                        The site is organized into experience, projects, courses, credentials, blog, and links. To go
                        back home then click, Home within the navigation. Experience is a listing of professional and
                        volunteer experiences where as projects is where featured projects are shown via a slideshow.
                        For courses & credentials, these are fetched from an Express server and are displayed
                        appropriately to demonstrate different ways of displaying data. The blog page is reduced set of
                        Medium articles authored by me and it is set to display 3 articles. Lastly, the links are a list
                        (collection) of links where I give credit to the creators of the technologies & tools that allow
                        not only myself but everyone else to create for the mobile, web, and beyond.
                    </p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}
