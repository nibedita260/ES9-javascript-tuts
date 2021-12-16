// ES9, capture groups were accessed by indexes. ES9 allows us to assign names to capture groups.
const birthDatePattern = /(?<myYear>[0-9]{4})-(?<myMonth>[0-9]{2})/;
const birthDate = birthDatePattern.exec('1995-04');
console.log(birthDate.groups.myYear);
console.log(birthDate.groups.myMonth);