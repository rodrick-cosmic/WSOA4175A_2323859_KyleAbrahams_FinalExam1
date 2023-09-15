'use client'
import React from "react";
import { LuClock10, LuClock2, LuClock3, LuClock4, LuClock5, LuClock6, LuClock7, LuClock8, LuTarget } from "react-icons/lu";
import { LuClock1} from "react-icons/lu";
import BlogImg1 from "@/public/Blog1.png"
import BlogImg2 from "@/public/Blog2.png"
import BlogImg3 from "@/public/Blog3.png"
import BlogImg4 from "@/public/Blog4.png"
import BlogImg5 from "@/public/Blog5.png"
import BlogImg6 from "@/public/Blog6.png"
import BlogImg7 from "@/public/Blog7.png"
import { Link } from "react-router-dom";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },

  {
    name: "Blogs", //projects
    hash: "#projects",
  },
  
  {
    name: "Design", //experience
    hash: "#Design",
  },
  {
    name: "Art", //skills
    hash: "#Art",
  },
 
] as const;

export const DesignData = [
  {
    title: "First website log 1",
    location: "link",
    description:
      "The goal going into this was to make a website that replicated that eerie feeling of being monitored. The idea came from thinking about how a modern day Big Brother from George Orwell's 1984 would function. ",
    icon: React.createElement(LuClock1),
    date: "April 2023",
    
  },

  {
    title: "Second website prototype log 1.3",
    location: "link",
    description:
      "After I received my marks and feedback for my first site I was made aware of several issues I had previously overlooked, and so one of the non-negotiables was that in the second website that would be built using React.Js I would elevate the site and revamp it completely. To use a bad video game analogy, I would not simply be 'porting' or even 'remastering' the site but remaking it from the ground up instead. ",
    icon: React.createElement(LuClock3),
    date: "Late April- Early May 2023",
  },

  {
    title: "Second website prototype log 2.3",
    location: "link",
    description:
      "Although watching the React tutorials Andre recorded was extremely helpful, I simply could not wrap my head around React and its complexities. As a result much of the second prototype of the second website looked, felt and ran no better than a preschooler hitting random keys on a computer.",
    icon: React.createElement(LuClock4),
    date: "May 2023",
  },
  {
    title: "Second website prototype log 3.3",
    location: "link",
    description:
      "I was still very interested in exploring a conscious commentary of the internet as a medium, and I did not give up on my idea of having a more dystopian and invasive website. I did however need to scale it back a bit due to personal issues and my dismal technical knowledge. Ultimately I was able to complete the second prototype and decided for my exam I would again redesign and remake the site from scratch.",
    icon: React.createElement(LuClock6),
    date: "Mid May 2023",
  },
  {
    title: "Exam log_1.2",
    location: "",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuClock8),
    date: "Mid May 2023",
  },
  {
    title: "Exam log_2.2",
    location:"",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuClock10),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blog 1",
    description:
      " I think one thing that immediately stood out for me was how it harked my thinking back to Marshall McLuhan...",
    tags: ["M.McLuhan", "1984", "973-eht-namuh"],
    imageUrl: BlogImg1,
  },

  {
    title: "Blog 2",
    description:
      "Conscious, I want to tackle the themes of mass surveillance, net bias & maybe even the invasion of privacy in the digital space.",
    tags: ["Conscious Art", "Net Bias", "Mass Surveillance"],
    imageUrl: BlogImg2,
  },

  {
    title: "Blog 3",
    description:
      " Most users will never get a chance to look at the inner workings of how certain elements are working on the page, and instead only care that they are working.",
    tags: ["UI & UX", "Web Design", "Color Theory"],
    imageUrl: BlogImg3,
  },

  {
    title: "Blog 4",
    description:
      " I think one thing that immediately stood out for me was how it harked my thinking back to Marshall McLuhan...",
    tags: ["M.McLuhan", "1984", "973-eht-namuh"],
    imageUrl: BlogImg4,
  },

  {
    title: "Blog 5",
    description:
      " Design Rationale 1",
    tags: ["Industry", "Minimal design", "Omegle"],
    imageUrl: BlogImg5,
  },

  {
    title: "Blog 6",
    description:
      " I think one thing that immediately stood out for me was how it harked my thinking back to Marshall McLuhan...",
    tags: ["M.McLuhan", "1984", "973-eht-namuh"],
    imageUrl: BlogImg6,
  },

  {
    title: "Blog 7",
    description:
      " I think one thing that immediately stood out for me was how it harked my thinking back to Marshall McLuhan...",
    tags: ["M.McLuhan", "1984", "973-eht-namuh"],
    imageUrl: BlogImg7,
  },

  
] as const;

export const skillsData = [
  "The",
  "poster",
  "with",
  "the",
  "enormous",
  "face",
  "gazed",
  " from ",
  " the wall.",
  "It",
  "was",
  "one ",
  "of ",
  "those pictures ",
  "which ",
  "are so ",
  "contrived that ",
  "the eyes ",
  "follow you about when you move.",
] as const;