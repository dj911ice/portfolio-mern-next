import React from "react";
import Link from "next/link"
import {navLinks} from "@/utils/navLinks";
import {FaLinkedin, FaGithub} from 'react-icons/fa';

function Header() {
    return (
        <>
            <header>
                <span>
                    <div>
                        <p id={"myName"}>Justin P. Dickerson</p>
                        <p>Computing Professional</p>
                        <p>Software Engineer</p>
                        <Link href={"https://www.linkedin.com/in/justinpdickerson/"}
                              target={"_blank"}><FaLinkedin id={"linkedin"}></FaLinkedin></Link>
                        <span> </span>

                        <Link href={"https://github.com/dj911ice"}
                              target={"_blank"}> <FaGithub id={"github"}></FaGithub></Link>
                    </div>
                    <nav>
                        {navLinks.map((link, navigation) => {
                            return (
                                <ul key={navigation}>
                                    <li>
                                        <Link href={link.path}>
                                            <div >{link.name}</div>
                                        </Link>
                                    </li>
                                </ul>
                            );
                        })}
                    </nav>
                </span>
            </header>
        </>
    );
}

export default Header