const day = document.getElementById("day")
const date = document.getElementById("date")

const d = new Date();

//Day function
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
const today = d.getDay();
day.innerHTML = days[today]

//Date function
const GetTime = () => {
    const d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000 * +5.5));
    var ist = nd.toLocaleString();
    time.innerHTML = ist;
}
setInterval(GetTime, 1000);

//Hour is from 0 - 23
const Sunday = `It's Sunday! No Class`
const Saturday = `It's Saturday! No Class`
const Break = `Yahh it's Break Time`
const TimeTable = [
    [Sunday,Sunday,Sunday,Sunday,Sunday,Sunday,Sunday,Sunday],
    [`DSMS`,`HSS Elective`,`Design of Structure`,`Building Materials`,Break,`Structural Analysis`,`Computer Lab`,`Computer Lab`],
    [`HSS Elective`,`Structural Analysis`,Break,`Surveying`,Break,Break,Break,Break],
    [`Structural Analysis`,`HSS Elective`,`Building Materials`,`DSMS`,Break,`Surveying`,`Material Testing Lab`,`Material Testing Lab`],
    [`Survey Field Works`,`Survey Field Works`,`Survey Field Works`,`Survey Field Works`,Break,Break,`Design of Structures`,Break],
    [`DBMS`,Break,`Design of Structure`,`Surveying`,Break,`Building Materials`,Break,Break],
    [Saturday,Saturday,Saturday,Saturday,Saturday,Saturday,Saturday,Saturday,]
]

// const prevClass = document.getElementById("prevClass")
const currClass = document.getElementById("currClass")
const nextClass = document.getElementById("nextClass")


const currHour = d.getHours();
const hourNow = currHour - 9;
// prevClass.innerHTML = TimeTable[today][hourNow-1];
currClass.innerHTML = TimeTable[today][hourNow];
nextClass.innerHTML = TimeTable[today][hourNow+1];