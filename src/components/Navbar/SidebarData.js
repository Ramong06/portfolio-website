import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        className: "nav-text"
    },
    {
        title: "About",
        path: "/about",
        icon: <IoIcons.IoMdPerson />,
        className: "nav-text"
    },
    {
        title: "Gallery",
        path: "/gallery",
        icon: <IoIcons.IoMdPhotos />,
        className: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <IoIcons.IoIosContact />,
        className: "nav-text"
    },
]