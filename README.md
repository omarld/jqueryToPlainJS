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
3. $(...).Append
4. $(...).prepend()
5. $(...).empty()
6. $(...).Attr(name)
7. $(...).val()
8. $(...).on()
9. $(...).off()
10. $(...).toggle()