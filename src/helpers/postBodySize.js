const postBodySize = body => {
  if (body === null || body === undefined) return 0;

  if (body.length < 50) return 'large';
  else if (body.length < 100) return 'medium';
  else return 'small';
}

export default postBodySize;