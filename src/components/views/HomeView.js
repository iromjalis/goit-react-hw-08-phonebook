import React from 'react';
import s from './HomeViews.module.css';
const Home = () => {
  return (
    <div className={s.Home}>
      <img
        src="https://lh3.googleusercontent.com/proxy/ZnMWOShsZvLauP_Xv-y-HNEkteChZiGf4-SjSwuEwmgOg6r62kpN8RwvYa8W9mChQhuAJV5ebhDGjXdllQhI-nxtTNP7YpRV4K0"
        alt="homepage image"
        title="My phonebook page background"
        min-width="0"
      />
      <p>
        <img
          src="https://3.imimg.com/data3/OP/FM/MY-8718020/police-telephone-directory-250x250.jpg"
          alt="phonebook image"
        />
      </p>
    </div>
  );
};
export default Home;
