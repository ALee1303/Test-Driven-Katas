const wrap = function ( inString, colWidth){
  let outString = ""
  if ( inString.length <= colWidth) {
    outString = inString
  }
  return outString
}
module.exports = wrap
