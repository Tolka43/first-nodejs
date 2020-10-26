import moment from "moment";

const now = moment();
const nowShort = now.format("MM-DD-YYYY");
const nowLong = now.format("DD MM YYYY hh:mm:ss");

console.log(nowShort, nowLong);

console.log("good night");
