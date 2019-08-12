# FxDOM

HTML DOM Bindings for the [FxJS](https://github.com/marpple/FxJS)

* [Selector](#selector)
* [Create](#create)
* [Manipulation](#manipulation)
* [CSS](#css)
* [Event](#event)
* [Data](#data)
* [Fetch](#fetch)

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

### $.children
### $.prevAll
### $.nextAll
### $.prev
### $.next

### $.is

첫 번째 인자에 전달된 셀렉터와 매칭이 되는지 확인합니다.

```javascript
console.log($.is('.item1', $('li:nth-child(1)')));
// true

console.log($.is('.item1', $('li:nth-child(2)')));
// true
```

### $.contains

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

### $.appendTo

```javascript
$.appendTo($('.comments'), $.el('<div class="comment">새 댓글</div>'));
```

### $.prependTo

```javascript
$.prependTo($('.posts'), $.el('<div class="post">새 글</div>'));
```

### $.append

```javascript
$.append($.el('<div class="comment">새 댓글</div>'), $('.comments'));
```

### $.prepend

```javascript
$.prepend($.el('<div class="post">새 글</div>'), $('.posts'));
```

### $.before
### $.after

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

<div id="div1"></div>

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
console.log($.setAttr({ status: 'ho' }, $.el('<div status="hi">')));
// HTMLDivElement <div status="ho"></div>
console.log($.setAttr({ status: 'ho', class: 'ye' }, $.el('<div status="hi">')));
// HTMLDivElement <div status="ho" class="ye"></div>
console.log($.setAttr(['status', 'ho'], $.el('<div status="hi">')));
// HTMLDivElement <div status="ho"></div>
console.log($.setAttr({ status: '' }, $.el('<div status="hi">')));
// HTMLDivElement <div status></div>
```

### $.removeAttr

```javascript
console.log($.removeAttr('status', $.el('<div status="hi">')));
// HTMLDivElement <div></div>
```

## CSS

### $.addClass

```javascript
console.log($.addClass('selected', $.el('div')));
// HTMLDivElement <div class="selected"></div>
console.log($.addClass('hi ho', $.el('div')));
// HTMLDivElement <div class="hi ho"></div>
console.log($.addClass('hi', $.el('<div class="ye">')));
// HTMLDivElement <div class="ye hi"></div>
```

### $.removeClass

```javascript
console.log($.removeClass('selected', $.el('<div class="selected"></div>')));
// HTMLDivElement <div class></div>
console.log($.removeClass('hi ho', $.el('<div class="hi ho"></div>')));
// HTMLDivElement <div class></div>
console.log($.removeClass('hi', $.el('<div class="ye hi">')));
// HTMLDivElement <div class="ye"></div>
```

### $.removeClass

```javascript
console.log($.removeClass('selected', $.el('<div class="selected"></div>')));
// HTMLDivElement <div class></div>
console.log($.removeClass('hi ho', $.el('<div class="hi ho"></div>')));
// HTMLDivElement <div class></div>
console.log($.removeClass('hi', $.el('<div class="ye hi">')));
// HTMLDivElement <div class="ye"></div>
```

### $.toggleClass

```javascript
console.log($.toggleClass('selected', $.el('<div class="selected"></div>')));
// HTMLDivElement <div class></div>

console.log($.toggleClass('selected', $.el('<div></div>')));
// HTMLDivElement <div class="selected"></div>
```

### $.css

### $.setCss

### $.show

### $.hide

### $.toggle

### $.offset

```javascript
console.log(
  $.offset(
    $.append(
      $('body'),
      $.setCss(
        { position: 'absolute', top: '20px', left: '30px', 'margin-top': '50px' },
        $.el('div')))));
// { top: 70, left: 30 }
```

### $.width
width

### $.height
height

### $.innerWidth
width + paddingLeft + paddingRight + borderLeft + borderRight

### $.innerHeight
height + paddingTop + paddingBottom + borderTop + borderBottom

### $.outerWidth
innerWidth + marginLeft + marginRight

### $.outerHeight
innerHeight + marginTop + marginBottom

### $.scrollTop

### $.scrollLeft

### $.setScrollTop

### $.setScrollLeft

## Event

### $.on

`$.on`은 `el.addEventListener`를 대신합니다. `$.on`은 이벤트를 등록할 함수를 리턴하며, 커링 방식으로만 사용할 수 있습니다.

 - 인자로 받은 함수를 조작하지 않고 `el.addEventListener`에 그대로 적용하여, 같은 엘리먼트에 같은 이벤트와 같은 함수를 등록이 되지 않는 `el.addEventListener`의 특징을 그대로 유지했습니다.
 - `el.addEventListener`의 `capture`, `passive` 등의 옵션을 사용할 수 있습니다.
 - `e.preventDefault`, `e.stopPropagation`을 사용할 수 있습니다.
 - `el.removeEventListener`와 `$.off`를 사용할 수 있습니다.

```html
<button type="button" id="btn1">
  <span>btn1</span>
</button>
```

```javascript
const addClickEvent = $.on('click', function(e) {
  console.log(e.currentTarget); // #btn1
  console.log(e.target); // span
});

addClickEvent($('#btn1'));
addClickEvent($('#btn1')); // 두 번 등록해도 추가로 등록되지 않음.
$.trigger('click', $('#btn1 span'));
// #btn1
// span
```

`$.on`의 두 번째 인자에 셀렉터를 전달하면 매칭되는 자식요소에 이벤트를 등록합니다. 이 방식은 위임 방식이 아니며, 역시 `el.addEventListener`의 주요 특징과 기능을 모두 사용할 수 있습니다.

```html
<div class="articles">
  <div class="article">
    <button type="button" class="remove"><span>삭제</span></button>
  </div>
  <div class="article">
    <button type="button" class="remove"><span>삭제</span></button>
  </div>
</div>
```

```javascript
const Articles = {
  addEvents: pipe(
    $.on('click', '.article:nth-child(1)', function(e) {
      console.log(e.currentTarget);
    }),
    $.on('click', '.article', function(e) {
      console.log(e.currentTarget);
    }, { capture: true }),
    $.on('click', '.remove', function(e) {
      console.log('other_data:', e.other_data);
      console.log(e.currentTarget);
    }))
};

Articles.addEvents($('.articles'));

$.trigger('click', $('.articles .article:nth-child(1) .remove')); // 한 번만 실행
// other_data: undefined
// button.remove
// div.article

$.trigger('click', $('.articles .article:nth-child(2) .remove'));
// div.article
// other_data: undefined
// button.remove

$.append($('.articles'), $.el(`
  <div class="article new">
    <button type="button" class="remove"><span>삭제</span></button>
  </div>
`));

Articles.addEvents($('.articles'));

$.trigger('click', $('.articles .article:nth-child(1) .remove')); // 한 번만 실행
// other_data: undefined
// button.remove
// div.article

$.trigger('click', $('.articles .article:nth-child(3) .remove'));
// div.article.new
// other_data: undefined
// button.remove

$.trigger('click', { other_data: 'hi' }, $('.articles .article:nth-child(3) .remove'));
// div.article.new
// other_data: hi
// button.remove
```

### $.off

`$.on`에 전달한 모든 인자를 동일하게 전달하여 이벤트를 지울 수 있습니다.

```html
<button type="button" id="btn2"></button>
```

```javascript
const eventArgs = ['click', function() { console.log('hi~') }];
$.on(...eventArgs)($('#btn2'));
$.off(...eventArgs)($('#btn2'));
$.trigger('click', $('#btn2'));
// nothing
```

### $.delegate

이벤트 위임 방식으로 이벤트를 등록합니다. 이벤트를 등록하고자 하는 엘리먼트가 동적으로 간편하게 이벤트를 등록해둘 수 있습니다.

```html
<div class="users">
</div>
```

```javascript
go(
  $('.users'),
  $.delegate('click', '.remove', function() {
    console.log('remove user');
  }));

$.append($('.users'), $.el(`
  <div class="user new">
    <button type="button" class="remove"><span>삭제</span></button>
  </div>
`));

$.trigger('click', $('.users .remove'));
// remove user
```

이벤트 위임 방식은 아래와 같은 옵션들을 사용할 필요가 없는 상황에 한하여 사용하는 것을 권장합니다.

 - `el.addEventListener`의 `capture`, `passive` 등의 옵션을 사용할 수 없습니다.
 - `e.preventDefault`, `e.stopPropagation`을 사용할 수 없습니다.
 - `el.removeEventListener`와 `$.off`를 사용할 수 없습니다.
 - `mouseleave`, `mouseenter`는 정상 동작하지 않습니다.

[don.js](https://github.com/marpple/don.js)에서는 이벤트 위임 방식에서 위 기능들을 모두 구현하여 제공했지만, 사실상 브라우저의 이벤트에 대한 모든 동작을 라이브러리 위에 다시 구현하는 장황한 코드들이 필요하며, 경험상 그 실용성이 떨어진다고 생각하여 FxDOM은 해당 기능을 구현하지 않는 컨셉으로 가고자 합니다.

### $.delegate + & 응용

```html
<div class="signup" agree="false">
  <input type="checkbox">
  <button type="button">가입</button>
</div>
```

```javascript
go($('.signup'),
  $.delegate('change', 'input', function(e) {
    $.setAttr({ agree: e.currentTarget.checked }, e.delegateTarget);
  }),
  $.delegate('click', '&[agree="false"] button', function() {
    console.log('동의해주세요!');
  }),
  $.delegate('click', '&[agree="true"] button', function() {
    console.log('감사합니다!');
  }));

$.trigger('click', $('.signup button'));
// 동의해주세요!
$.trigger('click', $('.signup input'));
$.trigger('click', $('.signup button'));
// 감사합니다!
```

## Data

### $.data, $.setData

```html
<div class="item" fxd-data='{"id": 1, "active": true}'></div>
```

```javascript
const { id, active } = $.data($('.item'));
console.log(id, active);
// 1 true

const data = $.data($.setData({ id: 1, active: false }, $('.item')));
console.log(data.active);
// false
data.active = true;
console.log($.data($('.item')).active);
// true
```

## Fetch

`$.get, $.post, $.put, $.delete`의 `Content-Type`은 `application/json`으로 설정되어있으며 응답이 오면 JSON 객체를 반환합니다. 4개 함수 모두 필요 인자는 2개 이상이며, 인자를 1개만 전달하면 함수를 리턴합니다.

### $.get

```javascript
$.get('/api/posts', { offset: 0, limit: 10 }); // GET '/api/posts?offset=0&limit10'
// Promise [{id: 1, ...}, {id: 2, ...}, ...]
```

### $.post
```javascript
$.post('/api/posts', { content: 'ho~'}); // POST /api/posts, BODY { content: 'ho~' }
// Promise {id:1, content: 'ho', created_at: ... }
```

### $.put

```javascript
$.put(`/api/posts/${post.id}`, post); // PUT /api/posts/1, BODY { id: 1, ... }
// Promise {id:1, content: 'ho', updated_at: ... }
```

### $.delete

```javascript
$.delete(`/api/posts/${post.id}`, undefined); // DELETE /api/posts/1
```