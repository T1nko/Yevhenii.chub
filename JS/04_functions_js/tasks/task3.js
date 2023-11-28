import { curry } from "https://unpkg.com/ramda?module";

const log = curry((title) => (msg) => console.log(`${title}: ${msg}`));

const le = log("ERROR");
const lw = log("WARNING");
const ln = log("NOTIFY");

le("message 1");
lw("message 2");
ln("message 3");
