const superbowlWin = (record) => {
  let answer = record.find(rec => rec.result === "W")
  if (answer) {
    return answer.year
  } else {
    return undefined
  }
  
}