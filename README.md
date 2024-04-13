# Namaste food

// Header
//   -logo container
//      --logo
//   -nav items 
// Body
//   -Search
//   -RestaurantContainer
//     -RestaurantCard
//       -img
//       -Name of Res , star Rating, cusines, etc
// Footer
//   -CopyRight
//   -Links
//   -Addresses
//   -Contact


# Export ANd Import
// Default export CompName 
// import CompName from "path";

// Named Export : - when u need to export multiple constants together then   use export keyword before the constant name.
// import {CompName} from "path"; 

# Use state hook
// its just a normal java script function 
// To keep consistency with data layer and UI layer we need this because in normal JS it takes too much code
//Whenever state updates the component re renders and displays the data properly
// React makes this dom operations super fast 

# Reconciliation algorithm also known as React Fiber
//Virtual DOM is the representation of the actual dom which is nothing but a normal JS object 

# Reconciliation and DIff algo , Actual and virtual DOMS 

The Virtual DOM and the Actual DOM are concepts related to how React efficiently updates the user interface. Understanding these concepts helps in grasping how React optimizes rendering performance.

Actual DOM:
The Actual DOM (Document Object Model) is the tree-like structure that represents the HTML elements of a web page. It's the real, physical structure of the rendered page in the browser. Every time there's a change in the state or props of a component in a traditional web application (without React or similar libraries), the entire DOM tree is updated to reflect those changes. This process is known as "reconciliation."

Virtual DOM:
The Virtual DOM, on the other hand, is a lightweight copy of the Actual DOM, maintained by React. When you make changes to the state or props of a component in React, it doesn't immediately update the Actual DOM. Instead, it first updates the Virtual DOM, which is a representation of how the Actual DOM should look after the changes.

How React Works with the Virtual DOM:
When you update the state or props of a component in React, it triggers a process called "reconciliation." React compares the current Virtual DOM with the previous Virtual DOM snapshot to determine the differences (what needs to be changed).

Updating the Virtual DOM: React updates the Virtual DOM based on the new state or props.

Diffing Algorithm: React's diffing algorithm then compares the updated Virtual DOM with the previous one. It identifies the minimum number of changes needed to update the Actual DOM.

Updating the Actual DOM: Finally, React applies only the necessary changes to the Actual DOM. This process is more efficient than updating the entire DOM tree, as it reduces the number of manipulations to the real DOM.

React's Reconciliation Process:
React uses a diffing algorithm during the reconciliation process to identify the changes efficiently. Here's a simplified version of how it works:

React creates a new Virtual DOM tree when a component's state or props change.

It then compares this new Virtual DOM with the previous one.

React identifies the differences between the old and new Virtual DOM.

Only the necessary updates are made to the Actual DOM to reflect these differences.