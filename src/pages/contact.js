import React, { useState, useRef } from 'react';

//Components
import Head from '../components/head';

//Styles
import contactStyles from '../styles/contact.module.scss';

const Contact = () => {

  const nameInput = useRef("");
  const emailInput = useRef("");
  const textInput = useRef("");

  const [focusedInput, setfocusedInput] = useState(null);

  return (<>
    <Head titleSecond="kontakt" />
    <main className={contactStyles.contact}>
      <h1>Jeżeli zainteresowała Cię nasza oferta, napisz!</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Name</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="text">Name</label>
          <textarea type="text" id="text" cols="3" rows="4" />
        </div>
      </form>
    </main>
  </>);
}

export default Contact;

