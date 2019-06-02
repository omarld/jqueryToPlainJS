//IE9+ browsers
//https://www.quackit.com/html/tags/html_code_tag.cfm

var utils = {
    onLoadCallBack: function(){
        console.log("window loaded...");
    
        //1) $('#content').html()
        this.getHtml();
    
        //2) $('#results').append("some html")
        this.appendResults();
    
        //3) $('#results').prepend("some html")
        this.prependResults();
    
        //5) attr
        this.viewAttributes();

        //6) value()
        this.value();

        //7) on() and 8) off()
        this.setCheckedOnEvent(); 

        //9) toggle()
        this.toggleImageDisplay();
    },
    getHtml : function(){
        var content = document.querySelector("div#html-content p").innerHTML;
        document.querySelector("div#results p").innerHTML = content;
        //NOTE on inserting script tag .. in jQuery you need to use .text() instead.
        // for plain JS you need to create an script element and append, more on this later.
    },
    
    appendResults : function(){
        var appendEl = document.querySelector("div#append-content");
        var childEl = document.createElement("div");
        childEl.innerHTML = "<p>New <strong>child</strong> Content!</p>"
    
        //appending
        appendEl.appendChild(childEl);
    },
    
    prependResults: function(){
        var prependEl = document.getElementById("prepend-content");
    
        var newDiv = document.createElement("div");
        var textNode = document.createTextNode("new content to insert!");
        newDiv.appendChild(textNode);
    
        prependEl.insertBefore(newDiv, prependEl.firstChild);
    },
    
    emptyContent: function(){
        var contentEl = document.getElementById("empty-content");
        console.log("empty content");
        contentEl.innerHtml = "";
        while(contentEl.firstChild){
            contentEl.removeChild(contentEl.firstChild);
        }
    },
    
    resetEmptyContent: function(){
        var contentEl = document.getElementById("empty-content");
        contentEl.innerHTML = "<p>Empty me please!</p>"
    },
    
    viewAttributes : function(){
        var el = document.querySelector("div#attributes input#check1");
        var checkedAttr = el.getAttribute("checked");
        var asObj = el.getAttributeNode("checked");
    
        var resultsEl = document.querySelector("section#attr div.results");
        resultsEl.innerHTML = `<p> checked: ${checkedAttr} - As Object: ${asObj.name}="${asObj.value}"</p> 
        <div>
            <p>Can also use 'el.checked' to check for binded property : ${el.checked}</p>
        </div>
        `;
    },
    setChecked: function(){
        var el = document.querySelector("div#attributes input#check1");
        el.checked = !el.checked;
    },
    value: function(){
        var contentEl = document.querySelector("section#value div.content");
        var lnameValue = contentEl.querySelector("input[name='lname']").value;

        var resultsEl = document.querySelector("section#value div.results");
        resultsEl.innerHTML = `<p>Last name = ${lnameValue}</p>`;

        return {
            set:function(){
                contentEl.querySelector("input[name='fname']").value = "Some random value";
            } 
        }
    },
    setCheckedOnEvent: function(){
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
    },
    toggleImageDisplay: function(){
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
    }
}

//domready https://github.com/ded/domready
if(document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)){
    utils.onLoadCallBack();
} else {
    document.addEventListener("DOMContentLoaded", utils.onLoadCallBack.bind(utils));
}