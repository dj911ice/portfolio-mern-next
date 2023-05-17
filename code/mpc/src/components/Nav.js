import Link from 'next/link'
    import React from "react";
function Nav() {
    return (
        <nav>
            <h1>Justin P. Dickerson</h1>
            <Link href={"/"}>Home</Link>
            <Link href={"/experience"}>Experience</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/courses"}>Courses</Link>
            <Link href={"/credentials"}>Credentials</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/links"}>Links</Link>
        </nav>
    );
}

export default Nav;