import React from 'react';
import s from './HomeViews.module.css';
const Home = () => {
  return (
    <div className={s.Home}>
      <p>
        <img
          src="https://lh3.googleusercontent.com/proxy/ZnMWOShsZvLauP_Xv-y-HNEkteChZiGf4-SjSwuEwmgOg6r62kpN8RwvYa8W9mChQhuAJV5ebhDGjXdllQhI-nxtTNP7YpRV4K0"
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
