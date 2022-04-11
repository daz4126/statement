<div align="center">

# STATEMENT

> super simple state management for vanilla JS

[![npm](https://img.shields.io/npm/v/statement)](https://www.npmjs.com/package/nanny-state)
[![License](https://img.shields.io/badge/License-Unlicense-blue)](#license)

</div>

**STATEMENT** makes it ridiculously easy to add reactive state-based elements to your vanilla JS projects.

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

## SET

* `state` is an object that contains your inital state.
* `element` is the element that you want the template to be rendered inside.
* `template` is a function that returns a string of HTML that will be rendered inside the target element.

## Simple Counter Example

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
