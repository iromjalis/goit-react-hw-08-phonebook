import React from 'react';
import s from './HomeViews.module.css';
const Home = () => {
  return (
    <div className={s.Home}>
      <p>
        <img
          src="https://lh3.googleusercontent.com/proxy/g9RKo-O2EA8pnM3_2QhhEAIWL4rm74AHjvUVtntCCMT3ETSQgnW7aZ10gV92DRsVAWS2Jg1X0yQaZpaV8EEIz2gKPgDNFs8GRQM"
          alt="my phonebook"
          title="My phonebook page background"
        />
      </p>
      <p>
        <img
          src="https://3.imimg.com/data3/OP/FM/MY-8718020/police-telephone-directory-250x250.jpg"
          alt="person with phone"
        />
      </p>
    </div>
  );
};
export default Home;
