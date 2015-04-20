import math from './index';
import equal from 'assert';

it('Should fix multiply symbol', ()=> {
  equal(math(`2 x 3 = 6`), `2 × 3 = 6`);
});

it('Should fix minus symbol', ()=> {
  equal(math(`3 - 2 = 1`), `3 − 2 = 1`);
});

it('Should fix less-than or equal to', ()=> {
  equal(math(`3 <= 2`), `3 ≤ 2`);
});

it('Should fix greater-than or equal to', ()=> {
  equal(math(`4 >= 4`), `4 ≥ 4`);
});

it('Should fix much less than', ()=> {
  equal(math(`2 << 10000`), `2 ≪ 10000`);
});

it('Should fix much greater than', ()=> {
  equal(math(`999999 >> 5`), `999999 ≫ 5`);
});

it('Should fix plus or minus', ()=> {
  equal(math(`5 +- 1`), `5 ± 1`);
});

it('Should fix minus or plus', ()=> {
  equal(math(`10 -+ 1`), `10 ∓ 1`);
});
