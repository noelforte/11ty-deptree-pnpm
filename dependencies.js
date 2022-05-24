const md = require("markdown-it")();
const sass = require("sass");
const dayjs = require("dayjs");

let markdown = md.render("# markdown-it rulezz!");
let css = sass.compileString("h1 { a { color: red; } }");
let day = dayjs().format("2233453");
