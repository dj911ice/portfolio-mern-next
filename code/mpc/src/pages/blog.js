import Header from "@/components/Header";
import React from "react";
import {useEffect, useState} from 'react';

function Blog() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await
                    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@justin.p.dickerson');
                const data = await res.json();
                const items = data.items.slice(5);
                setItems(items);
            } catch {
                setError(true);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            <Header/>
            <main>
                <section>
                    <div>
                        <h1>Curated Medium Article Feed</h1>
                        <ul>
                            {items.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <a href={item.link} target={"_blank"}>
                                        <p style={{fontWeight: "bold"}}>{item.title}</p>
                                    </a>
                                </div>
                            ))}
                        </ul>
                        <a
                            href={"https://medium.com/@justin.p.dickerson"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            Read More on Medium
                        </a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Blog

/* code article courtesy of https://kevin-jonathan.medium.com/*/