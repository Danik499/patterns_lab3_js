import { Meeting, Birthday } from "./program"

let instance;
let type = "meeting"
let format = "JSON"
let startTime = "",
    endTime = "",
    venue = "",
    date = "",
    contacts = ""
if (type == "meeting") {
    startTime = "15:30"
    endTime = "19:30"
    venue = "hotel Uzhhorod"
}
else {
    date = "2020/03/08"
    contacts = "0951607142"
}

let ex
if (type == "meeting") ex = new Meeting(startTime, endTime, venue)
else ex = new Birthday(date, contacts)

ex.output(format)

