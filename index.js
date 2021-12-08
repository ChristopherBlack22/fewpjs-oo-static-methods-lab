class Formatter {
  static capitalize(string) {
    return (string[0].toUpperCase() + string.slice(1))
  }

  static sanitize(string) {
    return string.replace(/[^\w|'|\-| ]/g, "")
  }

  static titleize(string) {
    let stringArray = string.split(" ");
    let capsArray = stringArray.map(function(word) {
      if (word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from") {
        return word
      } else {
        return this.capitalize(word)
      }
    }.bind(Formatter));
    let capsString = capsArray.join(" ");
    return this.capitalize(capsString)
  }

}