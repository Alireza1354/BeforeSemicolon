class Day {
    constructor(date = null, lang = "default") {
      date = date ?? new Date();
      this.Date = date;
      //this.date = date.getDate();
      this.date = Number(
        mapMyString(date.toLocaleString(lang, { day: "numeric" }))
      );
      this.day = date.toLocaleString(lang, { weekday: "long" });
      this.dayNumber = date.getDay() + 2;
      this.dayshort = date.toLocaleString(lang, { weekday: "short" });
      this.yearShort = Number(
        mapMyString(date.toLocaleString(lang, { year: "2-digit" }))
      );
  
      this.month = date.toLocaleString(lang, { month: "long" });
      this.monthShort = date.toLocaleString(lang, { month: "short" });
      this.timestamp = date.getTime();
    }
  }
  
  const day = new Day(null, "fa");
  console.log("-- day", day);
  
  function mapMyString(value) {
    let txt = "";
    for (let i = 0; i < value.length; i++) {
      switch (value[i]) {
        case "۰":
          txt += "0";
          break;
        case "۱":
          txt += "1";
          break;
        case "۲":
          txt += "2";
          break;
        case "۳":
          txt += "3";
          break;
        case "۴":
          txt += "4";
          break;
        case "۵":
          txt += "5";
          break;
        case "۶":
          txt += "6";
          break;
        case "۷":
          txt += "7";
          break;
        case "۸":
          txt += "8";
          break;
        case "۹":
          txt += "9";
          break;
      }
    }
    return txt;
  }
  