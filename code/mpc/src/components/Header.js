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
                                <ul>
                                    <li>
                                        <Link href={link.path}>
                                            <div key={navigation}>{link.name}</div>
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