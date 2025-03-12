"use client"
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { ReactTyped } from "react-typed";
import Navbar from "@/navbar/Navbar";
import Projects from "@/projects/Projects";
import style from "./page.module.css";
import Image from "next/image";
import webd from "./19362653.jpg";
import express from "./express.webp";
import reactjs from "./reactjs.webp";
import postgres from "./postgres.webp";
import node from "./node.webp";
import next from "./next.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className={style.main}>
      <Navbar />
      <section data-aos="fade-up" id="home" className={style.item2}>
        <h1 className={style.ui}>
          <ReactTyped
            startWhenVisible
            strings={['front end /', 'web developer']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h1>
        <Image data-aos="fade-up" className={style.imgFluid} quality={100} src={webd} alt="A web developer" width={300} height={300} />
        <h1 className={style.webd}>
          <ReactTyped
            // startWhenVisible
            strings={[' back end /', 'web developer']}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </h1>
      </section>
      <section id="technologies" className={style.item3}>
        <h1 data-aos="fade-up" className={style.tech}> technologies </h1>
        <div className={style.flexDiv}>
          <div data-aos="fade-up" className={style.express}>
            <Image className={style.img} src={express} alt="" width={60} height={60} />
            <h3> Express js</h3>
          </div>
          <div data-aos="fade-up" className={style.post}>
            <Image className={style.img} src={postgres} alt="" width={60} height={60} />
            <h3>PostgreSQL</h3>
          </div>
          <div data-aos="fade-up" className={style.react}>
            <Image className={style.img} src={reactjs} alt="" width={60} height={60} />
            <h3> React js</h3>
          </div>
          <div data-aos="fade-up" className={style.next}>
            <Image className={style.img} src={next} alt="" width={60} height={60} />
            <h3>Next js</h3>
          </div>
          <div data-aos="fade-up" className={style.node}>
            <Image className={style.img} src={node} alt="" width={60} height={60} />
            <h3> Node js</h3>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" id="projects" className={style.item4}>
        <Projects />
      </section>
      <footer data-aos="fade-up" id="footer" className={style.item5}>
        <h1>About me</h1>
        <p>Hi, I&apos;m Ugorji Bright, a full stack web developer based in Nigeria.</p>
        <p>I am a tech savvy individual with a Bachelor&apos;s degree in Chemistry (Industrial chemistry), seeking employment as a Web developer.
          I am passionate about consistently advancing my knowledge and skills. I have attented multiple seminars and boot camps on coding and Web Developmemt.</p>
        <br />
        <a className={style.button} href="mailto:ugorjibright123@gmail.com">Email me</a>
        <div className={style.links}>
          <a className={style.icons} href="https://x.com/UgorjiBright_"><FaTwitter /></a>
          <a className={style.icons} href="https://github.com/Brightsnich"><FaGithub /></a>
          <a className={style.icons} href="https://www.linkedin.com/in/ugorji-bright-63a312346/"><FaLinkedin /></a>
        </div>
      </footer>
    </main>
  );
}
