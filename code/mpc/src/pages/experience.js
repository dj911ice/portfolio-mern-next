import React from "react";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

function Experience(){
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>My Experience</h2>
                    <p>Professional Software Engineering Experience:</p>
                    <ul>
                        <li>Ruby Developer at Prota Ventures</li>
                        <li>Android Engineer as a independent consultant</li>
                        <li>Senior Android Developer at a top fortune 100 company</li>
                        <li>Android Developer at the Mobile Apps Company</li>
                        <li>Web Administrator at Council for Economic Opportunities in Greater Cleveland</li>
                        <li>Web Marketing Associate at Home Appliance Mart</li>
                        <li>Web Administrator at Solutions for VIP Dancers</li>
                    </ul>
                    <p>Volunteer Experience:</p>
                    <ul>
                        <li>Web Master at Ballroom Club at the University of Michigan</li>
                    </ul>
                    <h2>Resume/CV</h2>
                    <div className={"resume"}>
                        <a href={"/resume/JPDSWEResume_050823.pdf"} target={"_blank"}>
                            <button id={"pdf"}>Resume PDF</button>
                        </a>
                        <a href={"/resume/JPDSWEResume_050823.docx"}>
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

export default Experience
