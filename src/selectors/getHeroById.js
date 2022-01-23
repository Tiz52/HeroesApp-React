import React from 'react';
import { heroes } from '../data/heroes';

export const getHeroById = ( id = '') => {

  console.log('hero');

  return heroes.find( hero => hero.id === id);
};
