import React, { useState, useRef } from 'react';

//Components
import Head from '../components/head';

//Styles
import contactStyles from '../styles/contact.module.scss';

const Contact = () => {

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const textInput = useRef(null);
  const nameLabel = useRef(null);
  const emailLabel = useRef(null);
  const textLabel = useRef(null);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("");

  const setInputValues = (e) => {
    if (e.name) console.log('a')
  }

  return (<>
    <Head titleSecond="kontakt" />
    <main className={contactStyles.contact}>
      <h1>Jeżeli zainteresowała Cię nasza oferta, napisz!</h1>
      <section>
        <form>
          <div>
            <input ref={nameInput} type="text" id="name" />
            <label ref={nameLabel} htmlFor="name">Name</label>
          </div>
          <div>
            <input ref={emailInput} type="text" id="email" />
            <label ref={emailLabel} htmlFor="email">E-mail</label>
          </div>
          <div>
            <textarea ref={textInput} type="text" id="text" />
            <label ref={textLabel} htmlFor="text">Message</label>
          </div>
          <button onClick={(e) => { e.preventDefault(); }}>Wyślij!</button>
        </form>
      </section>
      <section>
        <span></span>
      </section>
    </main>
  </>);
}

export default Contact;

