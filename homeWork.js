# Scope Homework: Who Dunnit

### Learning Objectives

- Understand function scope
- Know the difference in between the let and const keywords

## Brief

Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

### MVP

#### Episode 1

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
```
// The murderer is Miss Scarlet. You can access to a const variable, but it can't be reassigned.

#### Episode 2

```js
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

// That's an error, const variable can't be reassigned.

#### Episode 3

```js
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = 'The murderer is ${murderer}.';
console.log('Second Verdict: ', secondVerdict);
```

// 1st log: First Verdict: Mrs. Peacock. We are using declareMurderer variable from the inner block, where Mrs. Peacock was assigned as murderer.
// 2nd log: Second Verdict: Professor Plum. We are out of the inner block, so the "first" let murderer will be the answer.

#### Episode 4

```js
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
```

// 1st log: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. We are using declareAllSuspects from the inner block, where the "new" suspectThree was assigned as Colonel Mustard.
// 2nd log: Suspect three is Mrs. Peacock. We are out of the inner block, so the "original" suspectThree is the answer.

#### Episode 5

```js
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
```

// The weapon is the Revolver. We can't reassigne a const variable, but we can change a property.

#### Episode 6

```js
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

// The murderer is Mrs. White. At the end of the changeMurderer function we called the inner function plotTwist. In that function the murderer was defined as Mrs. White.

#### Episode 7

```js
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
```

// The murderer is Mr. Green. I'd have said Miss Scarlet according to the previous example (Episode 6), but then I realised the let keyword in the plotTwist function. So we can't get access to that murderer. So the only option is the murderer from the beginning of the changeMurderer function, Mr. Green.

#### Episode 8

```js
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
```

// The weapon is Candle Stick. As I mentioned before we can't reassigne a const variable, but we can change a property. According to the plotTwist function the room was the Dining Room, so the murderer was Colonel Mustard instead of Mrs. Peacock. Because of that the result of the unexpectedOutcome function is: scenario.weapon = 'Candle Stick'.

#### Episode 9

```js
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
```

// The killer is Professor Plum. The "second" murderer (Mrs. Peacock) was declared with the let keyword, so we can't get access to it from outside of the function.

### Extensions

Make up your own episode!

```js

const day_02 = {
  murderer: 'You',
  weapon: 'your MacBook',
  room: 'Toilet'
};

const changeOfPlan = function() {
  day_02.murderer = 'Niall';
  day_02.weapon = 'Steve\'s MacBook';

  const theory = function() {
    day_02.room = 'Breaking room';
    day_02.weapon = 'Jordan\'s MacBook';

    let moreThanTheory = function() {
      day_02.room = 'toilet';
      day_02.murderer = 'Jordan';

      let itIsAConspiracy = function() {
        day_02.room = 'Turing room';
        day_02.murderer = 'Jordan';
        day_02.weapon = 'Niall\'s MacBook'

        if (day_02.weapon == 'Steve\'s MacBook') {
          day_02.room = 'Hamilton room';
        }

        if (day_02.room == 'toilet') {
          day_02.room = 'Your house';
        }

        if (day_02.murderer == 'You') {
          day_02.weapon = 'Niall\'s MacBook';
          day_02.room = 'toilet';
        }

        if (day_02.murderer == 'You') {
          day_02.weapon = 'Steve\'s MacBook';
          day_02.room = 'Breaking room';
        }

        if (day_02.weapon == 'Jordan\'s MacBook') {
          day_02.murderer = 'Steve';
          day_02.weapon = 'Toilet Brush';
        }
        itIsAConspiracy();
      }
      moreThanTheory();
    }
    changeOfPlan();
  }
}

const declareEverything = function() {
  return `The weapon is ${day_02.weapon}, the room is ${day_02.room}, and the murderer is ${day_02.murderer}.`
}

const verdict = declareEverything();
console.log(verdict);

```
