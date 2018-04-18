<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/combination-generator/master/demo/src/assets/logo.svg">
</p>

# combination-generator - Angular Library built on the top of the combination generator package of @udjamaflip in order to generate all possible (unique) permutations of a provided list of characters.
 This library allows you to provide a list of characters and a min/max length of output string to generate a 
 list of all possible combinations (or non-unique permutations of those characters). This is useful for getting a
  list of characters for brute-forcing or to test password combinations (e.g: for ngx-material-password-strength)

_NB_: This project is originally forked from [udjamaflip/combination-generator](https://github.com/udjamaflip/combination-generator).


[![npm version](https://badge.fury.io/js/combination-generator.svg)](https://badge.fury.io/js/combination-generator),
[![Build Status](https://travis-ci.org/anthonynahas/combination-generator.svg?branch=master)](https://travis-ci.org/anthonynahas/combination-generator)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/combination-generator/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/combination-generator?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/combination-generator/status.svg)](https://david-dm.org/anthonynahas/combination-generator)
[![devDependency Status](https://david-dm.org/anthonynahas/combination-generator/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/combination-generator#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/combination-generator.svg)](https://greenkeeper.io/)

<p align="center">
  <img alt="ngx-combination-generator" style="text-align: center;"
   src="assets/demo.gif">
</p>


## Demo

View all the directives in action at https://anthonynahas.github.io/combination-generator

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-combination-generator` via:
```shell
npm install --save ngx-combination-generator
```

*NB: Global installation is required for CLI commands to work correctly*
```shell
npm install -g ngx-combination-generator
```
---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-combination-generator`:
```js
map: {
  'ngx-combination-generator': 'node_modules/ngx-combination-generator/bundles/ngx-combination-generator.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { NgxCombinationGeneratorModule } from 'ngx-combination-generator';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxCombinationGeneratorModule .forRoot()`):
```js
import { NgxCombinationGeneratorModule } from 'ngx-combination-generator';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxCombinationGeneratorModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxCombinationGeneratorModule `:

```js
import { NgxCombinationGeneratorModule } from 'ngx-combination-generator';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxCombinationGeneratorModule, ...], 
})
export class OtherModule {
}
```

## Usage


#### Expected input
The input is expected to be an array of characters expected to be used i.e.
```javascript
var myCharacterList = ['a','0','R','3','#','f','P','x'];
```

#### Code
Using that array we can pass it through as the first parameter, and then specify the minimum and maximum length of the combinations to be generated
```javascript
var generator = require('node_modules/generator.js'),
	myCombinations = generator(myCharacterList, 1, 2); //1 is the shorted a combo will be, 2 is the longest
	
console.log(myCombinations);
```

#### Output
This will output a JSON string containing all possible combinations like so:
```javascript
["a","0","R","3","#","f","P","x","aa","a0","aR","a3","a#","af","aP","ax","0a","00","0R","03",
"0#","0f","0P","0x","Ra","R0","RR","R3","R#","Rf","RP","Rx","3a","30","3R","33","3#","3f","3P","3x","#a","#0","#R","#3","##","#f","#P","#x","fa","f0","fR","f3","f#","ff","fP","fx","Pa","P0","PR","P3","P#","Pf","PP","Px","xa","x0","xR","x3","x#","xf","xP","xx"]
```

### Using as CLI (Runtime)

You can use the command in 2 a few different ways using an input file, or an inline comma-separated list i.e.
`generate-combos a,0,R,3,#,f,P,x 1 2`

You can pipe the output in to a file like so:
`generate-combos a,0,R,3,#,f,P,x 1 2 >> my-list-of-character-combinations.json`

You can also specify an input file, the file must contain the same expected input i.e.
*my-input-list.json*
`a,0,R,3,#,f,P,x 1 2`

Then run the command:
`generate-combos my-input-list.json 1 2`

or use the same command and pipe in to a JSON file for further usage:
`generate-combos my-input-list.json 1 2 >> my-list-of-character-combinations.json`

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-material-pages](https://github.com/AnthonyNahas/ngx-material-pages)
- [ngx-material-password-strength](https://github.com/AnthonyNahas/ngx-material-password-strength)


## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

