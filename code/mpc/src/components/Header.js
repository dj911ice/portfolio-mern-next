import React from "react";
import Link from "next/link"
import {navLinks} from "@/utils/navLinks";

function Header() {
    return (
        <>
            <header>
                <span>
                    <Link href={"https://www.linkedin.com/in/justinpdickerson/"} target={"_blank"}>LinkedIn</Link>
                    <Link href={"https://github.com/dj911ice"} target={"_blank"}> Github</Link>
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