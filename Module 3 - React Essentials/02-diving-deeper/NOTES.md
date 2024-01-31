## Day 6 - Notes

### useState

- Components in React only render once the code has been encountered. You have to tell React that the component needs to update the UI once there is an action which has taken place. If the state is not updated, the component and the UI will not be updated to reflect the changes which have been made.

- useState ALWAYS returns an array. The first element is the variable, the second element is one that sets the value of the first element

- Any functions that start wth the word 'use' are React Hooks. It is a built in function within the React Library.

- Hooks must be called inside a component function
- Hooks must be at the top level.

- Trying to see the value of the state variable will not work after calling the setter fn will display the old state. It will always display the previous state bc the component has technically been re-rendered right away.

### <pre>

- Will keep the form factor in how the content / code was entered on the page.

## Day 5 - Notes

### props.children

This be the content which is between the <component> content </component>

### onClick

Rather than using **document.querySelector** like you would in vanilla JS, you would use a special prop / attribute to an element so that it will act like a **querySelector**, but it is associated with the element itself.
