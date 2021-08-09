export const formatLink = (link) => {
  let arr = link.trim().split('//');

  if (arr.length > 1) return link;
  arr.unshift('https://');
  return arr.join('');
};
