import React from "react";
import Header from "@/components/Header";

function Experience(){
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Professional Experience</h2>
                    <p>Software Engineering Experience:</p>
                    <ul>
                        <li>Ruby Developer at Prota Ventures</li>
                        <li>Android Engineer as an Independent Consultant</li>
                        <li>Former Android Developer at the Mobile Apps Company</li>
                        <li>Former Web Administrator at Council for Economic Opportunities in Greater Cleveland</li>
                        <li>Former Web Marketing Associate at Home Appliance Mart</li>
                        <li>Former Web Administrator at Solutions for VIP Dancers</li>
                    </ul>
                    <p>Volunteer Experience:</p>
                    <ul>
                        <li>Former Webmaster at Ballroom Club at the University of Michigan</li>
                        <li>Former Director of Curriculum at Ballroom Club at the University of Michigan</li>
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
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Experience
