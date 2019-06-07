## My Top most commonly use jQuery functions converted to Plain Old Javascript.

### These are so simple that there is no need to import a huge library. Just Keeping It Simple!

1. $(document).ready(..)

```javascript
if(document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)){
    // call your functions here
} else {
    // call your functions here
}
```

2. $(...).HTML()

```javascript
var content = document.querySelector("section#html div.content p.retrieve").innerHTML;
document.querySelector("section#html div.results p.sample").innerHTML = content;
```

3. $(...).Append

```javascript
var appendEl = document.querySelector("section#append div.content div.results");
var childEl = document.createElement("div");
childEl.innerHTML = "<p>New <strong>child</strong> Content!</p>"

//appending
appendEl.appendChild(childEl);
```

4. $(...).prepend()

```javascript
var prependEl = document.querySelector("section#prepend div.content p#existing");

var newDiv = document.createElement("div");
var textNode = document.createTextNode("new content to inserted!");
newDiv.appendChild(textNode);

prependEl.insertBefore(newDiv, prependEl.firstChild);
```

5. $(...).empty()

```javascript
var contentEl = document.getElementById("empty-content");
console.log("empty content");
contentEl.innerHtml = "";
while(contentEl.firstChild){
    contentEl.removeChild(contentEl.firstChild);
}
```

6. $(...).Attr(name)

```javascript
var el = document.querySelector("div#attributes input#check1");
var checkedAttr = el.getAttribute("checked");
var asObj = el.getAttributeNode("checked");

var resultsEl = document.querySelector("section#attr div#results");
resultsEl.innerHTML = `<p> checked: ${checkedAttr} - As Object: ${asObj.name}="${asObj.value}"</p> 
```

7. $(...).val()

```javascript
var contentEl = document.querySelector("section#value div.content");
var lnameValue = contentEl.querySelector("input[name='lname']").value;

var resultsEl = document.querySelector("section#value div.results");
resultsEl.innerHTML = `<p>Last name = ${lnameValue}</p>`;
```

8. $(...).on()

```javascript
var inputEl = document.getElementById("check-event");
var toggleBtn = document.getElementById("btn-check-event");

var toggleFunction = function(){
    inputEl.checked = !inputEl.checked;
}

document.getElementById("btn-check-event-on").addEventListener("click", function(evt){
    toggleBtn.addEventListener("click", toggleFunction);
});

document.getElementById("btn-check-event-off").addEventListener("click", function(evt){
    if (toggleBtn.removeEventListener) {                   // For all major browsers, except IE 8 and earlier
        toggleBtn.removeEventListener("click", toggleFunction);
    } else if (toggleBtn.detachEvent) {                    // For IE 8 and earlier versions
        toggleBtn.detachEvent("click", toggleFunction)
    }
});
```

9. $(...).off()

```javascript
var inputEl = document.getElementById("check-event");
var toggleBtn = document.getElementById("btn-check-event");

var toggleFunction = function(){
    inputEl.checked = !inputEl.checked;
}

document.getElementById("btn-check-event-on").addEventListener("click", function(evt){
    toggleBtn.addEventListener("click", toggleFunction);
});

document.getElementById("btn-check-event-off").addEventListener("click", function(evt){
    if (toggleBtn.removeEventListener) {                   // For all major browsers, except IE 8 and earlier
        toggleBtn.removeEventListener("click", toggleFunction);
    } else if (toggleBtn.detachEvent) {                    // For IE 8 and earlier versions
        toggleBtn.detachEvent("click", toggleFunction)
    }
});
```

10. $(...).toggle()


```javascript
var imgEl = document.querySelector("#image-to-toggle img");
document.getElementById("toggle-image-visibility").addEventListener("click", function(evt){
    if(imgEl.style.visibility && imgEl.style.visibility === "hidden"){
        imgEl.style.visibility = "initial";
    } else {
        imgEl.style.visibility = "hidden";
    }
});

document.getElementById("toggle-image-display").addEventListener("click", function(evt){
    if(imgEl.style.display && imgEl.style.display === "none"){
        imgEl.style.display = "initial";
    } else {
        imgEl.style.display = "none";
    }
});
```