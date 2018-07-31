const friendlyDate = date => {
  var now = new Date();
  var timeStamp = fromRailsStringToJavascriptDate(date);

  var secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
  
  if (secondsPast < 60) {
    secondsPast = parseInt(secondsPast);
    return secondsPast + (secondsPast === 1 ? ' secondo fa' : ' secondi fa');
  } else if (secondsPast < 3600) {
    let minutesPast = parseInt(secondsPast / 60);
    return minutesPast + (minutesPast === 1 ? ' minuto fa' : ' minuti fa');
  } else if (secondsPast <= 86400) {
    let hoursPast = parseInt(secondsPast / 3600);
    return hoursPast + (hoursPast === 1 ? ' ora fa' : ' ore fa');
  } else {
    let daysPast = parseInt(secondsPast / 86400);
    return daysPast + (daysPast === 1 ? ' giorno fa' : ' giorni fa');
  }
}

export default friendlyDate;

/*
  Converts the default Rails datetime string
  format to a JavaScript Date object.
*/
const fromRailsStringToJavascriptDate = date => {
  let dateOnly = date.slice(0, 10);
  let timeOnly = date.slice(11, 19);
  
  return new Date(`${dateOnly}T${timeOnly}Z`);
}