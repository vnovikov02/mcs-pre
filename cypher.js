//didn't finish the script, it's just a basic code without proper limits to shift the letters and which transcripts everything to capital letters... and without decode yet.

function cypher(str, num) {
    var newString = [];
    
    str = str.toUpperCase();

    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        newString.push(str.charAt(i));
      } else if (str.charCodeAt(i) > 77) {
        newString.push(String.fromCharCode(str.charCodeAt(i) - num));
      } else {
        newString.push(String.fromCharCode(str.charCodeAt(i) + num));
      }
    }
    return newString.join("");
  }

