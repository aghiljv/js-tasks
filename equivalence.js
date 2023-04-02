// const _ = require("lodash");

const obj1 = {
  name: "Aghil",
  age: 31,
  favourites: {
    food: "Chicken",
    place: "Earth",
  },
  startDate: new Date(),
  test: [1, 2, 4, 5],
  testFunc: function () {
    return 20;
  },
};

const obj2 = {
  name: "Aghil",
  age: 31,
  favourites: {
    food: "Chicken",
    place: "Earth",
  },
  startDate: new Date(),
  test: [1, 2, 4, 5],
  testFunc: function () {
    return 30;
  },
};

console.log(check(obj1, obj2));

function check(obj1, obj2) {
  let objEqual = false;

  //if the objects are null or undefined, they are equal
  if (obj1 == null || obj1 == undefined) {
    if (obj2 == null || obj2 == undefined) {
      return true;
    }

    //if the object is a date, check the equality by getting the timestamp from the object
  } else if (Object.prototype.toString.call(obj1) == "[object Date]") {
    return obj1.getTime() === obj2.getTime();

    //if the object is a function, check if they are equal by converting it into string
  } else if (typeof obj1 === "function" && typeof obj2 === "function") {
    return obj1.toString() === obj2.toString();
  }

  //the rest of the types are checked
  else {
    const obj1Keys = Object.keys(obj1).sort();
    const obj2Keys = Object.keys(obj2).sort();
    if (obj1Keys.length !== obj2Keys.length) {
      console.log("not equal members, so", objEqual);
    } else {
      const areEqual = obj1Keys.every((key, index) => {
        const objValue1 = obj1[key];
        const objValue2 = obj2[obj2Keys[index]];

        //if object or function is detected, the function is called recursively
        if (typeof objValue1 === "object" || typeof objValue1 === "function") {
          return check(objValue1, objValue2);
        } else {
          return objValue1 === objValue2;
        }
      });
      if (areEqual) {
        objEqual = true;
      }
      return objEqual;
    }
  }
}
