export default function friendlyDate(date) {
  var now = new Date();
  var timeStamp = fromRailsStringToJavascriptDate(date);

  var secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
  
  if(secondsPast < 60) return parseInt(secondsPast) + ' secondi fa';
  if(secondsPast < 3600) return parseInt(secondsPast/60) + ' minuti fa';
  if(secondsPast <= 86400) return parseInt(secondsPast/3600) + ' ore fa';
  if(secondsPast > 86400) return parseInt(secondsPast/86400) + ' giorni fa';
}

/*
  Converts the default Rails datetime string
  format to a JavaScript Date object.
*/
function fromRailsStringToJavascriptDate(date) {
  var dateOnly = date.slice(0, 10);
  var timeOnly = date.slice(11, 19);
  return new Date(`${dateOnly}T${timeOnly}Z`);
}