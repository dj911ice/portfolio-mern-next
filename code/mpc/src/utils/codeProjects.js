import React from "react";
import {RiGithubFill} from "react-icons/all";
import {SiRuby, SiRubyonrails, SiJavascript} from "react-icons/all";
import Image from "next/image";

export const codeProjects = [
    {
        name: "Dance Products",
        url: "https://youtu.be/PQXwOXdSj9U",
        image: <Image
            src={"/../public/mytestappjpd-sm.png"}
            alt={"sample"}
            width={300}
            height={188}
        />,
        github: "https://github.com/dj911ice/nameofapp",
        githubIcon: <RiGithubFill/>,
        deviIcons: [<SiRuby/>, " ", <SiRubyonrails/>, " ", <SiJavascript/>]
    }
]