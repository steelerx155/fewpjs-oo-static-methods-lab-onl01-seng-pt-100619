class Formatter {
  //add static methods here
  static capitalize( string ) {
    return string.charAt(0) .toUpperCase() + string.slice(1)
  }
  static sanitize(){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
}