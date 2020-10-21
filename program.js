//--------------
// В обох проектах Арделан робила вивід данних, а Щербан функціонал і тестування
//--------------

class Meeting {
    startTime = ""
    endTime = ""
    venue = ""
    constructor(startTime, endTime, venue, date, contacts) {
        this.startTime = startTime
        this.endTime = endTime
        this.venue = venue
    }

    output(type) {
        if (type == "JSON") console.log(JSON.stringify({ startTime: this.startTime, endTime: this.endTime }))
        else {
            console.log("<?xml version=\"1.0\">")
            console.log(`<startTime>${this.startTime}</startTime>`)
            console.log(`<endTime>${this.endTime}</endTime>`)
            console.log(`<venue>${this.venue}</venue>`)
        }
    }
}

class Birthday {
    date = ""
    contacts = ""
    constructor(startTime, endTime, venue, date, contacts) {
        this.date = date
        this.contacts = contacts

    }
    output(type) {
        if (type == "JSON") return JSON.stringify({ date: this.date, contacts: this.contacts })
        else {
            console.log("<?xml version=\"1.0\">")
            console.log(`<date>${this.date}</date>`)
            console.log(`<contacts>${this.contacts}</contacts>`)
        }
    }

}

module.exports = { Meeting, Birthday }