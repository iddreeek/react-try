import { SiFirebase } from "react-icons/si"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { DiMysql } from "react-icons/di"; 
import { DiJavascript1 } from "react-icons/di"; 
import { FaPhp } from "react-icons/fa"; 
import { DiCss3 } from "react-icons/di"; 
import { AiFillHtml5 } from "react-icons/ai"; 

const projects = [
    {
        ID: 1,
        Title: "Academart",
        Img_URL: "/images/Academart.jpg",
        Description: "An institution based e-commerced where you can avail/offer services, and rent/lend products.",
        Link: "",
        Stack: [
            {
                ID: 1,
                Tech: "HTML",
                Icon: <AiFillHtml5 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 2,
                Tech: "CSS",
                Icon: <DiCss3 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 3,
                Tech: "PHP",
                Icon: <FaPhp className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 4,
                Tech: "JavaScript",
                Icon: <DiJavascript1 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 5,
                Tech: "MySQL",
                Icon: <DiMysql className=" h-[24px] w-[24px]"/>
            }
        ]
    },
    {
        ID: 2,
        Title: "Fit2Feet",
        Img_URL: "/images/fit2feet.png",
        Description: "An online shoe ordering system we made for our 1st mini project during our first year in web development subject.",
        Link: "",
        Stack: [
            {
                ID: 1,
                Tech: "HTML",
                Icon: <AiFillHtml5 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 2,
                Tech: "CSS",
                Icon: <DiCss3 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 3,
                Tech: "PHP",
                Icon: <FaPhp className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 4,
                Tech: "JavaScript",
                Icon: <DiJavascript1 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 5,
                Tech: "MySQL",
                Icon: <DiMysql className=" h-[24px] w-[24px]"/>
            }
        ]
    },{
        ID: 3,
        Title: "BlogIt",
        Img_URL: "/images/blogit.png",
        Description: " Blogging site with some functionalities",
        Link: "https://blogit-iddreeek.vercel.app",
        Stack: [
            {
                ID: 1,
                Tech: "Nextjs",
                Icon: <TbBrandNextjs className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 2,
                Tech: "Firebase",
                Icon: <SiFirebase className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 3,
                Tech: "JavaScript",
                Icon: <DiJavascript1 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 4,
                Tech: "HTML",
                Icon: <AiFillHtml5 className=" h-[24px] w-[24px]"/>
            },
            {
                ID: 5,
                Tech: "CSS",
                Icon: <DiCss3 className=" h-[24px] w-[24px]"/>
            },
        ]
    },
]

export default projects;