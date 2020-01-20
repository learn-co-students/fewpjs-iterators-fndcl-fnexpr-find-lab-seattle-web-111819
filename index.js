


const superbowlWin = (record) => {
  let answer = record.find(rec => rec.result == "w")
  if (answer) {
    return answer.year
  } 
  
}