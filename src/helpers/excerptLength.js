/*
  Calculate length of the excerpt by the fact that the
  PostsList is horizontal or vertical and it has a url or not
*/
const excerptLength = (horizontal, hasUrl) => {
  let length = 160; //base length
  if (horizontal) length /= 2; //half if PostsList is horizontal
  if (hasUrl) length /= 2; //half if it contains a url
  return length;
}

export default excerptLength;