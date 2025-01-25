import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Experience(){
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Professional Experience</h2>
                    <p>Software Engineering</p>
                    <ul>
                        <li>Ruby Developer at Prota Ventures</li>
                        <li>Android Engineer as an Independent Consultant</li>
                        <li>Former Android Developer at a Fortune 500 Company</li>
                    </ul>
                    <p>Undergraduate Learning Assistant (Oregon State University)</p>
                    <ul>
                        <li>CS 340: Introduction to Databases</li>
                    </ul>
                    <p>Volunteer</p>
                    <ul>
                        <li>Former Webmaster at Ballroom Club at the University of Michigan</li>
                    </ul>

                    {/*<h2>Resume/CV</h2>
                    <div className={"resume"}>
                        <a href={"/resume/JPDSWEResume_090223.pdf"} target={"_blank"}>
                            <button id={"pdf"}>Resume PDF</button>
                        </a>
                        <a href={"/resume/JPDSWEResume_090223.docx"}>
                            <button id={"docx"}>Resume DOCX</button>
                        </a>
                    </div>*/}
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Experience
