import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

//Components
import Head from '../components/head';
import Map from '../components/mapContact';

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

  const handleLabelStyle = (e, label) => {
    if (e) {
      if (e.target.value) {
        label.current.style.top = "0"
        label.current.style.transform = "translate(0, -100%)"
        label.current.style.fontSize = ".8rem"
      } else {
        label.current.style.top = ""
        label.current.style.transform = ""
        label.current.style.fontSize = ""
      }
    }
    else {
      label.current.style.top = ""
      label.current.style.transform = ""
      label.current.style.fontSize = ""
    }
  }

  const setInputValues = (e) => {
    if (e.target.id === "name") {
      setname(e.target.value);
      handleLabelStyle(e, nameLabel);
    }
    if (e.target.id === "email") {
      setemail(e.target.value);
      handleLabelStyle(e, emailLabel);
    }
    if (e.target.id === "text") {
      settext(e.target.value);
      handleLabelStyle(e, textLabel);
    }
  }

  const handleSubmitContactForm = () => {
    setname("");
    setemail("");
    settext("");
    [nameLabel, emailLabel, textLabel].map(label => {
      handleLabelStyle(null, label);
    })
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_test', e.target, 'user_qZY7FllS46aSyJuEosQN8')
      .then((result) => {
        console.log(result.text);
        handleSubmitContactForm();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (<>
    <Head titleSecond="kontakt" />
    <main className={contactStyles.contact}>
      <h1>Jeżeli zainteresowała Cię nasza oferta, napisz!</h1>
      <div>
        <section>
          <form onSubmit={sendEmail}>
            <div>
              <input
                ref={nameInput}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={setInputValues} />
              <label ref={nameLabel} htmlFor="name">Name</label>
            </div>
            <div>
              <input
                ref={emailInput}
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={setInputValues} />
              <label ref={emailLabel} htmlFor="email">E-mail</label>
            </div>
            <div>
              <textarea
                ref={textInput}
                type="text"
                id="text"
                name="message"
                value={text}
                onChange={setInputValues} />
              <label ref={textLabel} htmlFor="text">Message</label>
            </div>
            <button type="submit">Wyślij!</button>
          </form>
        </section>
        <section>
          <address>
            <span>SmartHydro Sp. z o.o.</span>
            <span>31-331 Kraków, ul. Mehoffera 10/2</span>
            <span>tel: +48 604 156 103</span>
            <span>e-mail: smarthydro@smarthydro.pl</span>
            <span>NIP: 123654987</span>
          </address>
        </section>
      </div>
      <section>
        <div>
          <Map />
        </div>
      </section>
    </main>
  </>);
}

export default Contact;

