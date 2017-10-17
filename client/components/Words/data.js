import A from './data.a';
import B from './data.b';
import C from './data.c';
import D from './data.d';
import E from './data.e';
import F from './data.f';
import G from './data.g';
import H from './data.h';
import I from './data.i';
import J from './data.j';
import K from './data.k';
import L from './data.l';
import M from './data.m';
import N from './data.n';
import O from './data.o';
import P from './data.p';
import R from './data.r';
import S from './data.s';
import T from './data.t';
import U from './data.u';
import V from './data.v';
import Y from './data.y';

const wordsList = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'Y',
];

export default wordsList;


export function getWords(word) {
  let words = [];
  switch (word.toLowerCase()) {
    case 'a':
      words = A;
      break;
    case 'b':
      words = B;
      break;
    case 'c':
      words = C;
      break;
    case 'd':
      words = D;
      break;
    case 'e':
      words = E;
      break;
    case 'g':
      words = G;
      break;
    case 'f':
      words = F;
      break;
    case 'h':
      words = H;
      break;
    case 'i':
      words = I;
      break;
    case 'j':
      words = J;
      break;
    case 'k':
      words = K;
      break;
    case 'l':
      words = L;
      break;
    case 'm':
      words = M;
      break;
    case 'n':
      words = N;
      break;
    case 'o':
      words = O;
      break;
    case 'p':
      words = P;
      break;
    case 'r':
      words = R;
      break;
    case 's':
      words = S;
      break;
    case 't':
      words = T;
      break;
    case 'u':
      words = U;
      break;
    case 'v':
      words = V;
      break;
    case 'y':
      words = Y;
      break;
    default:
      break;
  }
  return words;
}
