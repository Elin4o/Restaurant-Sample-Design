import React from 'react';

import './Chef.css';
import {images} from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverser'>
      <img src={images.chef} alt="chef" style={{paddingBottom: '3rem'}}/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>  Ipsum corporis a reprehenderit sit similique velit eaque accusamus est fugit!</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, modi? Eligendi veritatis rem pariatur asperiores quos laboriosam autem facere, porro libero. Pariatur, nulla dolores saepe ad quasi numquam velit? Excepturi?</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
