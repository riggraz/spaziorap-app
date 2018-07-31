const excerptOf = (text, maxLength) => {
  text = text.replace(/(\r\n\t|\n|\r\t)/gm, " ");
  
  if (text.length <= maxLength) return text;
  else return text.substring(0, maxLength) + '...';
}

export default excerptOf;