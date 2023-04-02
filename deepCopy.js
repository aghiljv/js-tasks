let obj1 = {
  name: "Aghil",
  skills: { primary: "Full Stack", secondary: "Extended Reality" },
  calculateAge: function () {
    return 31;
  },
  startDate: new Date(),
};

function deepCopy(obj) {
  // if obj is a primitive type or null/undefined, they are returned as is
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // if the property is a date, it is handled seperately
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // an object is crested from obj to store the values to be passed on to the tartget object
  const copy = obj.constructor();

  // copying properties recursively
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

let obj2 = deepCopy(obj1);

//changing properties in the copy
obj2.name = "Jose";
obj2.skills.primary = "Front End";
obj2.startDate.setDate(obj2.startDate.getDate() + 5);

//logging both objects
console.log(obj1);
console.log(obj2);
