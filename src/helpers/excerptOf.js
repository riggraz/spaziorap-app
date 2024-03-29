const excerptOf = (text, maxLength) => {
  if (text === null || text === undefined) return "";
  
  text = text.replace(/(\r\n\t|\n|\r\t)/gm, " ");
  
  if (text.length <= maxLength) return text;
  else return text.substring(0, maxLength) + '...';
}

export default excerptOf;