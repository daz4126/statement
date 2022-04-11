<div align="center">

# STATEMENT

> super simple state management for vanilla JS

[![npm](https://img.shields.io/npm/v/statement)](https://www.npmjs.com/package/nanny-state)
[![License](https://img.shields.io/badge/License-Unlicense-blue)](#license)

</div>

**STATEMENT** makes it really easy to add reactive, state-based elements to your vanilla JS projects.

Once you create a new 'Statement' object it will automatically render the template whenever any of its values chance.

## Instatllation

### Using NPM CLI

Install [statement](https://www.npmjs.com/package/statement) from NPM.

```bash
npm install statement
```

Then import like this:

```javascript
import { Statement, html } from "statement";
```

### ES Modules

If you use ES Modules, you don't need NPM. You can import from a CDN URL in your browser or on CodePen.

```html
<script type="module">
  import { Statement,html } from 'https://cdn.skypack.dev/statement';
</script>
```

## Making a Statement

To create a Statement, all you need to do is assign a variable to the constructor function using the `new` keyword and provide state, element and template arguments:

```
const data = new Statement(
    state,
    element,
    template
)
```

These 3 arguments are all that's needed to 

`state` is an object that contains your inital state. e.g. 

```javascript
{
    name: "Statement",
    version: 1.0,
    difficulty: "easy"
}
```

* `element` is the element that you want the template to be rendered inside. e.g.

```javascript
document.getElementById("data-container")
```

`template` is a function that returns a string of HTML that will be rendered inside the target element. It uses the `html` tag function provided by [µhtml](https://github.com/WebReflection/uhtml) that accepts a template literal as an argument and returns a string of HTML that depends on the value of the properties in `state`. The template literal contains the HTML code to be displayed inside `element` and uses `${expression}` placeholders to insert properties of `state`. e.g.

```javascript
data => html`<h1>${data.name}</h1>`
```

Putting all this together would look like the following:

```javascript
const data = new Statement(
    state: {name: "Statement"},
    element: document.getElementById("data-container")
,
    template: data => html`<h1>${data.name}</h1>`
)
```

Once you have created a statement, you can make any changes to the variable you assigned it to as normal and the view will update to reflect those changes:

```javascript
data.name = "Super Statement"
```

This would result in the HTML inside the "data-container" element automatically updating to reflect this change:

```html
<div id="data-container">
  <h1>Super Statement</h1>
</div>
```

# Super Statement

When creating a Statement, all you need to remember is the mneuomonic S.E.T.

* state
* element
* template

## Simple Counter Example

You can see this example [live on CodePen](https://codepen.io/daz4126/pen/yLpqJQj).

index.html:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Statement Counter App</title>
        <script type="module" src="app.js"></script>
    </head>
    <body>
        <h1>Statement</h1>
        <h2>Counter Example</h2>
        <div id='counter'></div>
        <button id='down'>-</button>
        <button id='up'>+</button>
    </body>
</html>
```

app.js:

```javascript
import { Statement,html } from "statement"

const counter = new Statement({
  state: { value: 10 },
  element: document.getElementById("counter"),
  template: counter => html`${counter.count}`
})                                                    
 
document.getElementById("down")
  .addEventListener("click",e => counter.value--)
document.getElementById("up")
  .addEventListener("click",e => counter.value++)
```

## License

Released under [Unlicense](/LICENSE) by [@daz4126](https://github.com/daz4126).
