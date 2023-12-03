import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import Products from "./Products";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addContactsToStore} from '../reducers/contacts'

function Home() {
  
const dispatch = useDispatch();

const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [email, setEmail] = useState("")
const [content, setContent] = useState("")


  const handleDownload = () => {
    window.open("/CV.pdf");
  };

  const handleSubmit = ()=> {
    dispatch(addContactsToStore({firstname:firstname, lastname:lastname, email:email, content:content}))
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerBar}>
            <span className={styles.title}>PORTFOLIO</span>
            <div className={styles.iconsSection}>
              <a
                href="#projets"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FontAwesomeIcon title="Projet" icon={faFolder} className={styles.icon} />
              </a>
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FontAwesomeIcon title="Contact" icon={faAddressBook} style={{color: "#ffffff",}} className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.headerBottom}>
            <div className={styles.divColumn}>
              <span className={styles.text}>
                Après avoir fondé ma société et co-dirigé pendant 7 ans, je me
                lance dans un nouveau projet pour devenir développeur web/mobile
                et élargir mes compétences dans ce milieu qui m’attire depuis
                toujours.
              </span>
              <span className={styles.textBold}>MAXENCE OGIER</span>
              <span className={styles.text}>DEVELOPPEUR WEB/MOBILE JUNIOR</span>
            </div>
            <div>
              <button
                onClick={() => handleDownload()}
                className={styles.buttonLight}
              >
                C V
              </button>
            </div>
          </div>
        </div>
        <div className={styles.projets} id="projets">
          <Products />
        </div>
        <div id="contact" className={styles.footer}>
          <div className={styles.contactLien}>
          <div className={styles.link}>
            <Link href="https://www.linkedin.com/in/maxence-ogier/">
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <span>
                  <div className={styles.logolinkedin}></div>
                </span>
              </a>
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="https://github.com/X3nc3">
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <span >
                  <div className={styles.logogithub}></div>
                </span>
              </a>
            </Link>
          </div>
          </div>
          {/* <div >
            <form className={styles.contactform}>
            <label id="firstname" for="firstname">
            Nom
            </label>
            <input onChange={(e)=> setFirstname(e.target.value)} value={firstname} maxlength="34" id="firstname" type="text" placeholder=" Maxence"></input>

            <label id="lastname" for="lastname" >
            Prénom
            </label>
            <input onChange={(e)=> setLastname(e.target.value)} value={lastname} maxlength="34" id="email" type="email" placeholder=" OGIER"></input>

            <label id="email" for="email">
            email
            </label>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} maxlength="34" id="email" type="email" placeholder=" maxence.ogier@gmail.com"></input>

            <label id="content" for="content">
            Message
            </label>
            <textarea onChange={(e)=> setContent(e.target.value)} value={content} id="content" type="textarea" placeholder=" message" ></textarea>

            <button onClick={()=>handleSubmit()} className={styles.buttonadd} type="submit">Envoyer</button>
            </form>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default Home;
