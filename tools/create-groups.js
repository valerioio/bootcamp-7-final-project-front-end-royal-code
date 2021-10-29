const _ = require("lodash");
const fs = require("fs");

let names = [
  { firstName: "Hamza", lastName: "Ibrahim" },
  { firstName: "Himesh", lastName: "Patel" },
  { firstName: "Irfan", lastName: "Mohammed" },
  { firstName: "James", lastName: "Perrett" },
  { firstName: "Joseph", lastName: "T" },
  { firstName: "Joy", lastName: "Lin" },
  { firstName: "Tzu-Yun", lastName: "Lin" },
  { firstName: "Juweyriya", lastName: "Abdikadir" },
  { firstName: "Laurence", lastName: "Meah" },
  { firstName: "Liz", lastName: "Kaufman" },
  { firstName: "Lizard", lastName: "Morrow" },
  { firstName: "Mark", lastName: "Gilligan" },
  { firstName: "Mitchell", lastName: "Colson" },
  { firstName: "Mohit", lastName: "Sharma" },
  { firstName: "Nasra", lastName: "Diini" },
  { firstName: "Siddharth", lastName: "Nair" },
  { firstName: "Tao", lastName: "Sharma" },
  { firstName: "Tom", lastName: "Lowen" },
  { firstName: "Jadon", lastName: "Neal" },
  { firstName: "Jaydon", lastName: "Gilmore" },
  { firstName: "Moses", lastName: "Meadows" },
  { firstName: "Trenton", lastName: "Donovan" },
  { firstName: "Marin", lastName: "Ellis" },
  { firstName: "Gillian", lastName: "Wise" },
  { firstName: "Jay", lastName: "Gillespie" },
  { firstName: "Amiya", lastName: "Brennan" },
  { firstName: "Anne", lastName: "Levy" },
  { firstName: "Aryana", lastName: "Werner" },
  { firstName: "Christopher", lastName: "Barajas" },
  { firstName: "Deshawn", lastName: "Berry" },
  { firstName: "Yadira", lastName: "Schwartz" },
  { firstName: "Finnegan", lastName: "Norman" },
  { firstName: "Kody", lastName: "Delacruz" },
  { firstName: "Nevaeh", lastName: "Booth" },
  { firstName: "Eliana", lastName: "Baird" },
  { firstName: "Billy", lastName: "Hughes" },
  { firstName: "Imani", lastName: "Ortiz" },
  { firstName: "Orion", lastName: "Parker" },
  { firstName: "Sean", lastName: "Wolfe" },
  { firstName: "Dale", lastName: "Sloan" },
  { firstName: "Cristofer", lastName: "Schaefer" },
  { firstName: "Evelin", lastName: "Mullins" },
  { firstName: "Delilah", lastName: "Acevedo" },
  { firstName: "Keenan", lastName: "Morris" },
  { firstName: "Kallie", lastName: "Tanner" },
  { firstName: "Trevor", lastName: "Santiago" },
  { firstName: "Izabella", lastName: "Arias" },
  { firstName: "Braxton", lastName: "Velez" },
];

names = names.map(({ firstName, lastName }) => firstName + " " + lastName);
for (const size of "248") {
  let weeks = [];
  for (let i = 1; i <= 12; i++) {
    weeks.push({ week: i, groups: _.chunk(_.shuffle(names), size) });
  }
  fs.writeFile(
    `weeks-of-${size}.js`,
    `export const weeksOf${size} = ${JSON.stringify(weeks)}`,
    (e) => console.log(e ? "error" : "ok")
  );
}
