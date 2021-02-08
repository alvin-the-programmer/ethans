// https://leetcode.com/problems/binary-tree-level-order-traversal/

/*

Terminology: DF/BF 

DF
- uses a stack 
    - LIFO 
    - Add stuff to the top, can only remove off the top

BF
- uses a queue



Edge cases:
Have nodes with children
C only has one child 
Definition of binary tree is a tree where nodes have at most 2 children 

Assume that no one knows anything when you're interviewing

DFS - we're going to use a stack

            A
        B       C
    D       E       F




    b
    c
    ____
    bottom of stack

If we want to have a left going DF search, we need to push the right child of the root first 
    - We know that when it comes to our stack operation, we only add stuff to the top
    - If we push C, then B. Who is on top? The left child 
    - If we pop B, then we print it out and that we means we just finished exploring it
    - If we want to explore something, we have to put it at the top of the stack **** that is explored quicker 

We pop the node onto the stack then explore its children 

when the stack is empty, we are done 



BF Search 
    - Uses a queue 
        - keywords - add to back of queue and remove from front 



            A
        B       C
    D       E       F

a
front               back
remove a from the queue, print a. Now add its children, added b to the back then c to the back 
remove b from the front of the queue, add d then e to the back of its queue. 
remove c from the front of the queue, add its only child f to the back of the queue.
remove d from the front of the queue, since it does not have children we do not add anything. 
remove e from the front of the queue, since it does not have children we do not add anything. 
remove f from the front of the queue, since it does not have children we do not add anything. 
*/


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //    a
// //   / \
// // b    c 
// // /\    \
// // d e    f

// Write a fn the takes in the root of a BT and prints all nodes in DF order.


// depthFirstPrint(a);
// // a
// // b
// // d
// // e 
// // c
// // f

function depthFirstPrint(root) {
    let stack = [root];
    // us initializing the stack, root is always first thing in the stack
    // using push and pop 
    while (stack.length !== 0) {
        let current = stack.pop()
        console.log(current.val);
        if (current.right !== null) {
            stack.push(current.right)
        }
        if (current.left !== null) {
            stack.push(current.left)
        }
    }
}

// depthFirstPrint(a);
// a
// b
// d
// e 
// c
// f


function breadthFirstPrint(root){
    // push - add to back of queue
    // shift - remove from front
    let queue = [root];
    while (queue.length !== 0) {
        let current = queue.shift();
        console.log(current.val);
        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) { 
            queue.push(current.right)
        }
    }
}


// breadthFirstPrint(a);
// a
// b
// d
// e 
// c
// f

// const a = new Node(1);
// const b = new Node(5);
// const c = new Node(3);
// const d = new Node(2);
// const e = new Node(1);
// const f = new Node(10);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//    1
//   / \
//  5    3
// / \    \
// 2  1    10

// Write a fn the takes in a BT with number values and returns the sum of all values


function sumTree(root) { 
    let queue = [root];
    let sum = 0;
    while (queue.length !== 0) {
        let current = queue.shift();
        sum += current.val
        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) {
            queue.push(current.right)
        }
        
    }
    return sum;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(5);
const c = new Node(3);
const d = new Node(2);
const e = new Node(1);
const f = new Node(10);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(sumTree(a)); // 22
// breadthFirstPrint(a);
//    1
//   / \
//  5    3
// / \    \
// 2  1    10



/*

Adding a little flare to the utilities 

DFS - always a stack
    3
    / \
   9   20
        /\
     15   7


Printing this as a 2D array 

add 3 to the stack
[3, 0] - this represents index 0 or the root. 
popping it off the stack - then adding its children from right to left 
[(9, 1), (20, 1)] bottom of stack*


BFS - always a queue 


*/





function levelOrder(root) {
  let stack = [
    { node: root, level: 0 }
  ];

  while (stack.length !== 0) {

  }
}


// https://join.slack.com/t/job-seek-and-destroy/shared_invite/zt-l0uqezl3-A6pFBX8iFFAg2QHSz9BdVQ