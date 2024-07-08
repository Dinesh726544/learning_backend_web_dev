import express from 'express'

const app = express()
const port = 3000;


const d = new Date("July 2, 1983 01:15:00");
let day = d.getDay();

console.log(day);

const reqDay = (day) => {

  if(day == 0 || day == 6) {
    return 'Weekend'
  }
  else 
    return 'Weekday'
}

console.log(reqDay(day));



app.get("/", (req,res) => {
  res.render('index.ejs',{reqDay : reqDay(day)});
})


app.listen(port,(req,res) => {
  console.log(`app is listning at ${port}`);
})