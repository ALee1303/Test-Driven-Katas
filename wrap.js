const wrap = function (inString, colWidth){
  let outString = inString.trim();
  // where recursion exits
  if ( outString.length <= colWidth) {
    return outString;
  }
  const cutIdx = inString.lastIndexOf(' ', colWidth)
  const newSliced = outString.slice(0, cutIdx).trim();
  const remainingSlice = outString.slice(cutIdx);
  
  outString = `${newSliced}\n${wrap(remainingSlice, colWidth).trim()}`;
  return outString
}
module.exports = wrap
