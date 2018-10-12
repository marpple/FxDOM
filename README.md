# FxJS-DOM

## Selector

```html
<div class="container div1" active="true">
  <ul class="list1">
    <li class="item1">1</li>
    <li class="item2">2</li>
    <li class="item3">3</li>
  </ul>
  <div class="div2" active="true">
    <ul class="list2">
      <li class="item4">4</li>
      <li class="item5">5</li>
    </ul>
  </div>
</div>
```

### $, $.all

`$`는 `document.querySelector`를 사용하고 `$.all`은 `document.querySelectorAll`을 사용합니다.

```javascript
console.log($('.container li'));
// li.item1

console.log($.all('.container li'));
// NodeList(5) [li.item1, li.item2, li.item3, li.item4, li.item5]
```

### $.find, $.findAll

`$.find`는 `el.querySelector`를 사용하고 `$.findAll`은 `el.querySelectorAll`을 사용합니다.

```javascript
console.log($.find('li', $('.container div')));
// li.item4

console.log($.findAll('li', $('.container div')));
// NodeList(2) [li.item4, li.item5]

console.log($.find('li', $('.container')));
// li.item1

console.log($.findAll('li', $('.container')));
// NodeList(5) [li.item1, li.item2, li.item3, li.item4, li.item5]

console.log($.findAll('ul li', $('.container')));
// NodeList(5) [li.item1, li.item2, li.item3, li.item4, li.item5]
```

#### `el.querySelector`나 `el.querySelectorAll`의 아쉬운점

`el.querySelector`나 `el.querySelectorAll`의 경우는 셀렉터의 시작으로 `>`를 사용할 수 없습니다.

```javascript
try {
  document.querySelector('.container').querySelectorAll('> ul li');
} catch (e) {
  console.log(e);
  // DOMException: Failed to execute 'querySelectorAll' on 'Element': '> ul li' is not a valid selector.
}
```

`el.querySelector`나 `el.querySelectorAll`의 경우는 셀렉터의 시작이 부모도 포함하고, 자식요소도 포함한다는 점을 유의해야합니다.

```javascript
console.log(
  document
    .querySelector('.container')
    .querySelectorAll('[active=true] > ul li')
);
// NodeList(5) [li.item1, li.item2, li.item3, li.item4, li.item5]
```

#### with >, with &

아래 예제는 `$.find`, `$.findAll`와 `el.querySelector`나 `el.querySelectorAll`의 차이를 보여줍니다.

- `$.find, $.findAll`은 `>`를 셀렉터의 시작으로 사용할 수 있습니다.
- `&`를 통해 부모 element에 대해서만 추가 조건을 붙일 수 있습니다.

```javascript
console.log($.findAll('> ul li', $('.container')));
// NodeList(5) [li.item1, li.item2, li.item3]

console.log($.findAll('&[active="true"] li', $('.container')));
// NodeList(5) [li.item1, li.item2, li.item3, li.item4, li.item5]

console.log($.findAll('&[active="true"] > ul li', $('.container')));
// NodeList(5) [li.item1, li.item2, li.item3]

console.log($.findAll('&[active="false"] li', $('.container')));
// NodeList() []
```

### $.closest

자신을 포함하여 셀렉터와 매칭되는 부모 엘리먼트를 찾습니다.

```javascript
console.log($.closest('li', $('.item4')));
// li.item4

console.log($.closest('ul', $('.item4')));
// ul.list2

console.log($.closest('div', $('.item4')));
// div.div2

console.log($.closest('div.container', $('.item4')));
// div.container.div1
```

### $.is

첫 번째 인자에 전달된 셀렉터와 매칭이 되는지 확인합니다.

```javascript
console.log($.is('.item1', $('li:nth-child(1)')));
// true

console.log($.is('.item1', $('li:nth-child(2)')));
// true
```

## Create

### $.els

```javascript
console.log($.els('<span class="s1">1</span>'));
// HTMLCollection(2) [span.s1]

console.log($.els('<span class="s1">1</span><span class="s2">2</span>'));
// HTMLCollection(2) [span.s1, span.s2]
```

### $.el

```javascript
console.log($.el('<span class="s1">1</span>'));
// span.s1

console.log($.el('<span class="s1">1</span><span class="s2">2</span>'));
// span.s1
```

## Manipulation

### $.append

```javascript
$.append($('.comments'), $.el('<div class="comment">새 댓글</div>'));
```

### $.prepend

```javascript
$.prepend($('.posts'), $.el('<div class="post">새 글</div>'));
```

### $.remove
```javascript
$.remove($('.post'));
```

### $.text
```javascript
console.log($.text($.el('<div>hi</div>')));
// "hi"
```

### $.setText
```javascript
console.log($.setText('ho', $.el('<div></div>')));
// HTMLDivElement <div>ho</div>
```

### $.html
```javascript
console.log($.html($.el('<div><span>hi</span></div>')));
// "<span>hi</span>"
```

### $.setHtml
```javascript
console.log($.setHtml('<span>ho</span>', $.el('<div></div>')));
// HTMLDivElement <div><span>ho</span></div>
```

### $.outerHTML
```javascript
console.log($.outerHTML($.el('<div><span>hi</span></div>')));
// "<div><span>hi</span></div>"
```

### $.setOuterHTML

```html
<div id="div1"></div>
```

```javascript
let el = $('#div1');
$.setOuterHTML('<div id="div1" class="hi2"></div>', el);
console.log($('#div1'));
// HTMLDivElement <div id="div1" class="hi2"></div>
```

### $.val
```javascript
console.log($.val($.el('<input type="text" value="hoho">')));
// "hoho"
```

### $.setVal
```javascript
console.log($.setVal('hoho', $.el('<input type="text">')).value);
// "hoho"
```

### $.attr
```javascript
console.log($.attr('type', $.el('<input type="text" value="hoho">')));
// "text"
```

### $.setAttr
```javascript
console.log(1, $.setAttr({ status: 'ho' }, $.el('<div status="hi">')));
// HTMLDivElement <div status="ho"></div>
console.log(1, $.setAttr({ status: 'ho', class: 'ye' }, $.el('<div status="hi">')));
// HTMLDivElement <div status="ho" class="ye"></div>
console.log(1, $.setAttr(['status', 'ho'], $.el('<div status="hi">')));
// HTMLDivElement <div status="ho"></div>
console.log(1, $.setAttr({ status: '' }, $.el('<div status="hi">')));
// HTMLDivElement <div status></div>
```

### $.removeAttr

```javascript
console.log(1, $.removeAttr('status', $.el('<div status="hi">')));
// HTMLDivElement <div></div>
```

## Event

### $.on
### $.delegate

## Data

### $.data
### $.setData

## Fetch

### $.get
### $.post
### $.put
### $.delete