const moment = require('moment');

module.exports = function() {
  return {
    sunday: function () {
      const event = service('1661 S Crescent Heights Blvd, Los Angeles, CA 90035', 0, '103000', '123000');

      const link = document.createElement("a");
      link.download = 'snowball-church-service-sundays.ics';
      link.href = 'data:text/calendar;base64,' + encodeURI(toBase64(event));
      link.click();
    },

    wednesday: function () {
      const event = service('5555 Washington Blvd, Los Angeles, CA 90016', 3, '200000', '220000');

      const link = document.createElement("a");
      link.download = 'snowball-church-service-wednesdays.ics';
      link.href = 'data:text/calendar;base64,' + encodeURI(toBase64(event));
      link.click();
    }
  }
};

function toBase64(text) {
  const buff = new Buffer(text);
  return buff.toString('base64');
}

function service(location, day, fromTime, toTime) {
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const fullDate = moment().day(days[day]).format('YYYYMMDD');

  return (
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Snowball Church LA
X-WR-CALNAME:Snowball Church LA Service
NAME:Snowball Church LA Service
DESCRIPTION:Snowball Church LA Service
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:America/Los_Angeles
TZURL:http://tzurl.org/zoneinfo-outlook/America/Los_Angeles
X-LIC-LOCATION:America/Los_Angeles
BEGIN:DAYLIGHT
TZOFFSETFROM:-0800
TZOFFSETTO:-0700
TZNAME:PDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=${days[day].substring(0, 2)}
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0700
TZOFFSETTO:-0800
TZNAME:PST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=${days[day].substring(0, 2)}
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:${fullDate}T051637Z
UID:${fullDate}T051637Z-148008603
X-APPLE-TRAVEL-ADVISORY-BEHAVIOR:AUTOMATIC
DTSTART;TZID=America/Los_Angeles:${fullDate}T${fromTime}
RRULE:FREQ=WEEKLY;BYDAY=${days[day].substring(0, 2)}
DTEND;TZID=America/Los_Angeles:${fullDate}T${toTime}
SUMMARY:Snowball Church LA Service
URL:http%3A%2F%2Fsnowballchurch.la
LOCATION:${location}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-P1H
DESCRIPTION:Snowball Church Service Reminder
ACTION:DISPLAY
X-APPLE-DEFAULT-ALARM:TRUE
END:VALARM
END:VEVENT
END:VCALENDAR`);
}