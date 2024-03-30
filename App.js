const headingElem = React.createElement("h1",{id:"aheesh"},"Hello World Using React JS");   // create the h1 tag with the string // passing props 
const root = ReactDOM.createRoot(document.getElementById("root")); // create the root to render react code 
console.log(root);
root.render(headingElem);


const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}));


//how do you create multiple div structure using react basics ? 

{/* <div id = "parent">
<div id="child">
    <h1>Im H1 tag </h1>
    </div>
</div> */}

const parent1 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"Im H1 tag")));
const root1 = ReactDOM.createRoot(document.getElementById("root")); // create the root to render react code 
root.render(parent1);

// what if u have multiple childs like 

{/* <div id = "parent">
<div id="child">
    <h1>Im H1 tag </h1>
     <h1>Im H1 tag </h1>   --- multiple h1 tags then use an array
    </div>
</div> */}

const parent2 = React.createElement("div",{id:"parent"},
                [
                React.createElement("div",{id:"child"},
                React.createElement("h1",{},"Im H1 tag",
                React.createElement("h1",{},"Im H2 tag")))
                ]);
const root2 = ReactDOM.createRoot(document.getElementById("root")); // create the root to render react code 
root.render(parent2);