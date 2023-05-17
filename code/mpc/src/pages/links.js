import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import {mernLinks} from "@/utils/mernLinks";
import {devLinks} from "@/utils/devLinks";
import {blogLinks} from "@/utils/blogLinks";
function Links(){
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Links List</h2>
                    <h3>Blog</h3>
                    {blogLinks.map((link, blog) => {
                        return (
                            <ul key={blog}>
                                <li style={{listStyleType: "none"}}>
                                    <Link href={link.path} target={"_blank"}>
                                        <div>{link.name}</div>
                                    </Link>
                                </li>
                            </ul>
                        )
                    })}
                    <h3>MERN</h3>
                    {mernLinks.map((link, mern) => {
                        return (
                            <ul key={mern}>
                                <li style={{listStyleType: "none"}}>
                                    <Link href={link.path} target={"_blank"}>
                                        <div>{link.name}</div>
                                    </Link>
                                </li>
                            </ul>
                        )
                    })}
                    <h3>Development</h3>
                    {devLinks.map((link, dev) => {
                        return (
                            <ul key={dev}>
                                <li style={{listStyleType: "none"}}>
                                    <Link href={link.path} target={"_blank"}>
                                        <div>{link.name}</div>
                                    </Link>
                                </li>
                            </ul>
                        )
                    })}
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Links