import {
  LARGE,
  MEDIUM,
  SMALL,
} from '../constants/sizes';

/*
  Given the body length it returns how
  big the font should be.
*/

const postBodySize = body => {
  if (body === null || body === undefined) return 0;

  if (body.length < 50) return LARGE;
  else if (body.length < 100) return MEDIUM;
  else return SMALL;
}

export default postBodySize;