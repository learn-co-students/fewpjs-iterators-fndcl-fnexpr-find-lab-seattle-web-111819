const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = array => {
  let win = array.find(season => season.result == "W")
  if (win) {
    return win.year
  }
}
