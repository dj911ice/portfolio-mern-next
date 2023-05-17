import React from "react";
import Header from "@/components/Header";
function Contact(){
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>Contact</h2>
                    <span>Contact Form, routes to nodemailer</span>
                    <form action="/contact" method="post">
                        <fieldset>
                            <legend>Vitals</legend>
                            <label htmlFor="firstname" className="required">First Name:
                                <input type={"text"} name={"firstname"} id="firstname"
                                       size="30" maxLength="120" required
                                       placeholder="Given Name" autoFocus/>
                            </label>

                            <label htmlFor="lastname" className="required">Last Name:
                                <input type="text" name="lastname" id="lastname"
                                       size="30" maxLength="120"
                                       required placeholder="Surname"/>
                            </label>

                            <label htmlFor="email" className="required">Email Address:
                                <input type="email"
                                       name="email" id="email"
                                       size="30" maxLength="120"
                                       required
                                       pattern="[^ @]+@[^ @]+.[a-z]+"
                                       placeholder="your.email@domain.com"/>
                            </label>

                            <label htmlFor="contactmsg" className="contactmsg required">
                                <textarea
                                          name="contactmsg"
                                          id="contactmsg"
                                          cols="45"
                                          rows="7"
                                          minLength="7"
                                          maxLength="500"
                                          placeholder="Contact Message"
                                          required>
                                </textarea>
                            </label>
                            <p>
                                <button type="submit" disabled={true}>Submit</button>
                            </p>
                        </fieldset>
                    </form>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Justin Dickerson. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Contact