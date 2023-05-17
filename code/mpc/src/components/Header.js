import React from "react";
import Link from "next/link"
import {navLinks} from "@/utils/navLinks";

function Header() {
    return (
        <>
            <header>
                <span>
                    <span>LinkedIn & Github Icons</span>
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