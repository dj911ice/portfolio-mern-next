import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

function Plan() {
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Plan</h2>
                    <h3>Product/Service</h3>
                    <p>
                        The focus of this project is to create a brand new redesigned professional website/web
                        application utilizing the Mongo, Express, React, and Node (MERN) tech stack. This new site will
                        also have a link to the portfolio site created in CS 290 Web Development. Inspiration for the
                        project comes from the following website: <Link href="http://www.justinpdickerson.com"
                                                                        target="_blank"
                                                                        rel="noreferrer">www.justinpdickerson.com</Link>,
                        where it was written only
                        using the Hyper Text Markup Language (HTML), Cascading Style Sheets (CSS) and JavaScript (JS)
                        along with the Bootstrap CSS/JS framework & jQuery a JavaScript library. After five years, it is
                        time to retire the current site and replace it with a newly redesigned site that will be able to
                        take advantage of numerous modern web development techniques and features presented in CS 290 at
                        Oregon State University, since the technologies along with techniques utilized are considered
                        deprecated.
                    </p>
                    <h3>Frontend Design</h3>
                    <h4>Audience</h4>
                    <p>
                        The project’s intended audience are the various potential employers and recruiters looking at
                        the web application to determine suitability for employment within their firm or as a match to
                        pass my name along to their clients. Additionally, the web application potentially can double as
                        a client facing site in order to attract future clients. Upon being deployed, the domain mention
                        above will be used in numerous communication mediums, especially as it will be simpler and
                        easier to distribute the site’s web address. Essentially, the project’s goal is to enhance the
                        reputation and convey to the outside world of the competence of Justin P. Dickerson as software
                        engineer. The site will therefore provide the primary source of truth such as resume and other
                        important information relating to me as a software engineer.
                    </p>
                    <h4>Flow</h4>
                    <p>
                        Users of the website will be able to go from page to page via specific naturally placed
                        navigation links. Next.js allows each page to be have their respective route automatically
                        created, reducing routing errors. The LinkedIn & Github icons will send the user to a new page
                        linked to their respective social profiles. Users will be able to retrieve courses and
                        credentials from the MongoDB database as read only via a stylized button.
                    </p>
                    <h4>Layout</h4>
                    <p>
                        The general layout will consists of the following image below:
                    </p>
                    <Image src={"/../public/wireframe_resized_compressed.jpg"} alt={"wireframe"} width={800}
                           height={424}/>
                    <h4>Frontend Scheme</h4>
                    <p>
                        For the frontend, the basic color scheme is of a bluish nature. The background image is a
                        photograph of the beach located in South Carolina. The current font scheme is the same as for CS
                        290 portfolio to give a sense of consistency between the two sites. However, the font is subject
                        to change upon feedback. This site will make use of natural navigation in the upper right and on
                        the left within the header will be LinkedIn & Github icons pointing to their respective social
                        pages. On the projects page, currently there is a sample replica of what was done in the current
                        website, where each project had its own spot on the grid. After extensive experimentation will
                        convert it into a gallery. The credentials and courses pages will have a button to fetch the
                        read only data from the MongoDB database and present it in the form of a table.
                    </p>
                    <h4>Accessibility Features</h4>
                    <p>
                        The plan for accessibility will include larger text and icons. Additionally, implement a back to
                        the top of the site button. Creating buttons for the natural navigation anchors will assist
                        those with bigger fingers. For forms & images, add the additional screen reader text with
                        descriptive text for those who are blind.
                    </p>
                    <h4>Mobility Features</h4>
                    <p>
                        Mobility options for implementation are to be explored. However, general mobility options would
                        be reactive viewpoints embedded with the frontend design.
                    </p>
                    <h4>Domain name options</h4>
                    <p>
                        Domain options for the redesign will be limited to the existing
                        domain: <strong>justinpdickerson.com</strong> <br/>
                        However, any number subdomains and variations shall be utilized to fit the site's purpose.
                    </p>

                    <h3>Backend Design</h3>
                    <h4>MERN File Structure</h4>
                    <p>
                        Recently, the react team has suggested alternatives to in creating a React based application.
                        One of those alternatives is Next.js, which falls into the "R" (React) part of the stack. One of
                        the fundamental differences is the file structure is different and that it supports automatic
                        routing. This is due to Next.js having a file system type of structure.
                    </p>
                    <p>
                        The frontend folder, will consist of
                        the <code>.next</code>, <code>node_modules</code>, <code>public</code>, <code>src</code>, <code>styles</code>,
                        and <code>utils</code> directories. Within the <code>src</code> directory, have
                        the <code>components</code>, <code>images</code>, and <code>pages</code> directories.
                        The <code>public</code> directory consists of various images.
                        The <code>components</code> directory is where all the react components live. In
                        the <code>images</code> directory, the background images gets pulled into the background-image
                        css rule. Within the <code>pages</code> there is another directory name <code>api</code>, where
                        endpoints potentially could be created. However, page files live within
                        the <code>pages</code> directory. In the <code>styles</code> directory, is where all the style
                        sheets are housed. The <code>utils</code> directory is where link object array files are created
                        and utilized within the site. At the root of the <code>frontend</code> directory are the
                        configuration files.
                    </p>
                    <p>
                        For the database, will be using MongoDB. However, will have two different schemas. The first one
                        will be the credentials schema and the second being the courses schema. To incorporate the MVC
                        architecture, each schema will have its own separate set of model and controller files which
                        these will be located within the <code>backend</code> directory along with
                        the <code>node_modules</code> directory and required configuration files.

                    </p>
                    <h4>Security Measures</h4>
                    <p>
                        Due to the sensitive nature of the courses and credentials data, an authentication page where
                        one needs to sign in as an administrator will be implemented. It would be nice to implement some
                        kind of database validation, however that might be a bit of a stretch at the time being. If a
                        user is authenticated then they can perform <strong>CRUD</strong> operations on credentials &
                        courses data via a
                        web form. Ordinary (non-authenticated) users will only be able to access credentials & courses
                        data as read-only.
                    </p>
                    <h4>Hosting</h4>
                    <p>
                        Originally, AWS was the preferred choice for hosting the web application. However, it might be
                        wise to look for alternatives such as Vercel's platform and possibly keep static assets on AWS.
                    </p>
                    <h4>Recommendations/Revisions</h4>
                    <p>
                        The following improvements post decoration of the site are as follows:
                    </p>
                    <ul>
                        <li>Add additional accessibility/mobility features</li>
                        <li>Add additional authentication options</li>
                        <li>Add website analytics</li>
                        <li>Add database validation for data integrity</li>
                        <li>Add dropdown within the navigation</li>
                        <li>Improve the front-end color/font scheme</li>
                        <li>Perform an audit after year(s) 1, 3, and 5</li>
                    </ul>
                    <p>
                        The plan is subjected to change depending upon time constraints and feasibility of the
                        implementation of desired features.
                    </p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Plan