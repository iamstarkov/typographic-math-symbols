import math from './index';
import equal from 'assert';

it('Should fix multiply symbol', ()=> {
  equal(math(`2 x 3 = 6`), `2 × 3 = 6`);
});

it('Should fix minus symbol', ()=> {
  equal(math(`3 - 2 = 1`), `3 − 2 = 1`);
});
