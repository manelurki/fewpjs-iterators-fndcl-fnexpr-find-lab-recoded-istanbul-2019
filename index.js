const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}]
  //...
function isWinner (obj){
  return obj.result==="W";
}
<<<<<<< HEAD
function superbowlWin (record){
  if(record.find(isWinner)){
    let s=record.find(isWinner);
=======
function superbowlWIN (record){
  if(record.find(isWinner)){
>>>>>>> f2db2c281424e7b35a10837bc43ca1c81ae457cd
return s.year;
}
else return undefined;

<<<<<<< HEAD
superbowlWin(record)
=======
superbowlwin(record)
>>>>>>> f2db2c281424e7b35a10837bc43ca1c81ae457cd
}