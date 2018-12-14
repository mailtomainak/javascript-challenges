const stackMachineCalculator = (instructions) => {
  let _dataStore = [];
  let _top = 0;

  const _push = (number) => {
    _dataStore[_top++] = number;
    return _dataStore[_top]
  }

  const _pop = () => {

    var k = _dataStore[--_top];
    return k;
  }

  const _peek = () => {
    return _dataStore[_top - 1];
  }

  const _validateNumber = input => {

    //const numberRegex = '^[\+\-]?\d*.?\d*$';

    try {
      return parseInt(input);
    } catch (e) {
      throw ('Input was not in correct format')
    }
  }

  const _processNumbers = input => {
    const inputNumber = _validateNumber(input)
    _push(inputNumber);
  }
  const _substract = () => {
    const firstItem = _pop();
    const secondItem = _pop();
    _push(firstItem - secondItem);
  }

  const _add = () => {
    const firstItem = _pop();
    const secondItem = _pop();
    _push(firstItem + secondItem);
  }

  const instructionsArray = instructions.split(" ");
 
  instructionsArray.forEach(operation => {

      switch (operation) {
        case "POP":
          _pop();
          break;
        case "DUP":
          _push(_peek());
          break;
        case "+":
          _add();
          break;
        case "-":
          _substract();
          break;
        default:
          _processNumbers(operation);

      }


    }


  );


  return _pop();

  //return instructions
}

module.exports = stackMachineCalculator