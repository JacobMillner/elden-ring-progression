const swapSubstrings = (string: string, a: string, b: string): string => {
  return string.replace(new RegExp(`(${a}|${b})`, 'g'), (match) =>
    match === a ? b : a
  );
};

export const fixLongDesc = (longDesc: string) => {
  longDesc = swapSubstrings(
    longDesc,
    'href="',
    'href="https://eldenring.wiki.fextralife.com'
  );

  longDesc = swapSubstrings(
    longDesc,
    'target=""',
    'target="_blank" rel="noreferrer"'
  );

  return longDesc;
};
