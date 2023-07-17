import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import {mernLinks} from "@/utils/mernLinks";
import {devLinks} from "@/utils/devLinks";
import {depLinks} from "@/utils/depLinks";
function Links(){
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Links List</h2>
                    <h3>MERN</h3>
                    {mernLinks.map((link, mern) => {
                        return (
                            <ul key={mern}>
                                <li style={{listStyleType: "none"}}>
                                    <p>
                                        <Link href={link.path} target={"_blank"}>
                                            {link.name}
                                        </Link>: {link.description}
                                    </p>
                                </li>
                            </ul>
                        )
                    })}
                    <h3>Development</h3>
                    {devLinks.map((link, dev) => {
                        return (
                            <ul key={dev}>
                                <li style={{listStyleType: "none"}}>
                                    <p>
                                        <Link href={link.path} target={"_blank"}>
                                            {link.name}
                                        </Link>: {link.description}
                                    </p>
                                </li>
                            </ul>
                        )
                    })}
                    <h3>Deployment</h3>
                    {depLinks.map((link, dep) => {
                        return (
                            <ul key={dep}>
                                <li style={{listStyleType: "none"}}>
                                    <p>
                                        <Link href={link.path} target={"_blank"}>
                                            {link.name}
                                        </Link>: {link.description}
                                    </p>
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