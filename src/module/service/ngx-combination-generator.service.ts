import {Injectable} from '@angular/core';

@Injectable()
export class NgxCombinationGeneratorService {
  constructor() {
  }

  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }

  loadCombinationList(charList: string[], minCharCount: number, maxCharCount: number): string[] {
    let currentCode = '';
    let currentCodeLength = minCharCount; // get the first code to work with as a starting point.
    const comboList = [],
      charPos = [],
      lastCharacterIndex = charList.length;

    // generate base charPos array
    for (let i = 0; i < maxCharCount; i++) {
      charPos.push(0);
    }

    while (currentCodeLength <= maxCharCount) {

      if (currentCode.indexOf('undefined') > -1) {
        break;
      }

      // build the code and increment the specific charpos array index
      currentCode = '';
      for (let i = 0; i < currentCodeLength; i++) {
        currentCode += charList[charPos[i]];
      }
      charPos[currentCodeLength - 1]++;

      // save the code into the array
      comboList.push(currentCode);

      // now handle overflow - gotta go through array backwards
      let overflowCount = 0;
      for (let i: number = (charPos.length - 1); i >= 0; i--) {
        if (charPos[i] >= lastCharacterIndex) {
          overflowCount++;
          charPos[i] = 0;

          // if our current index position isn't 0
          // increase the previous character
          if (i !== 0) {
            charPos[i - 1]++;
          }
        }
      }

      // do we need to increase character count?
      if (overflowCount === currentCodeLength) {
        currentCodeLength++;
      }
    }

    return comboList;

  }
}
