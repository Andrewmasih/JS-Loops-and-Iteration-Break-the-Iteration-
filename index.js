/* 'break' keyword stops the iteration and exit the loop */


let i;

for (i = 0; i< 5; i ++) {
  if (i ===3) {
    break; // stops the iteration
  }
  console.log ("i:" + i);
}

/* although the iteration should have gone up all the way to 4, it ended when i was set to 3 because og the 'break' statement. */

