// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const superbowlWin = (record) => {
  let win = record.find(record => record.result === "W")
  return !!win ? win.year : undefined
}