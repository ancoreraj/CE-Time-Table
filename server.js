const express = require("express");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"))
app.set('view engine', 'ejs')

const d = new Date();
var ist;

//Day function
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
const today = d.getDay();

const GetTime = () => {
    const d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000 * +5.5));
    ist = nd.toLocaleString();
    //time.innerHTML = ist;
}
setInterval(GetTime, 1000);

const Sunday = `Its Sunday! No Class`
const Saturday = `Its Saturday! No Class`
const Break = `Its Break Time`
const TimeTable = [
    [Sunday,Sunday,Sunday,Sunday,Sunday,Sunday,Sunday,Sunday],
    [`DSMS`,`HSS Elective`,`Design of Structure`,`Building Materials`,Break,`Structural Analysis`,`Computer Lab`,`Computer Lab`],
    [`HSS Elective`,`Structural Analysis`,Break,`Surveying`,Break,Break,Break,Break],
    [`Structural Analysis`,`HSS Elective`,`Building Materials`,`DSMS`,Break,`Surveying`,`Material Testing Lab`,`Material Testing Lab`],
    [`Survey Field Works`,`Survey Field Works`,`Survey Field Works`,`Survey Field Works`,Break,Break,`Design of Structures`,Break],
    [`DBMS`,Break,`Design of Structure`,`Surveying`,Break,`Building Materials`,Break,Break],
    [Saturday,Saturday,Saturday,Saturday,Saturday,Saturday,Saturday,Saturday,]
]

const currHour = d.getHours();
const hourNow = currHour - 9;

const data = {
    days:days,
    day: days[today],
    today: today,
    currClass: TimeTable[today][hourNow],
    nextClass: TimeTable[today][hourNow+1],
    TimeTable: TimeTable,
    currHour: currHour,
    time:ist
}

app.get('/',(req,res)=>{
    res.render('index',{data:data})
})

app.get('/timetable',(req,res)=>{
    res.render('timetable',{data:data})
})

app.listen(PORT,console.log(`App is running on server 3000`))