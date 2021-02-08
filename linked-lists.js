// https://prod.liveshare.vsengsaas.visualstudio.com/join?E00C971CEF0FDE6AF9D5DB3D1D5046303B31
// https://awwapp.com/b/ufwraezd4nsz7/




class Node {
  constructor(value) {
    this.next = null;
    this.value = value
  }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;



// Recursively

// const printList = (node) => {
//   if (node === null) {
//     return;
//   }
//   console.log(node.value);
//   printList(node.next);
// };

// printList(a);
// a
// b
// c
// d

// Write a fn that takes in a linked list containing numbers as values and returns the total sum
// of values in the linked list.


// const sumList = (node) => {
//     if (node === null) {
//         return 0;
//     }
//     return node.value + sumList(node.next);
// }

// const a = new Node(2);
// const b = new Node(3);
// const c = new Node(1);
// const d = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// 2 -> 3 -> 1 -> 7

// console.log(sumList(a)); // 13

// const foo = () => {
//   return 2 + 2;
// };

// console.log(foo());

// Write a fn that takes in a linked list containing chars as values and returns a string 
// containing all characters concatenated together.


// const stringList = (node) => {
//     if (node === null) {
//         return '';
//     }
//     return node.value + stringList(node.next)
// };

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;

// console.log(stringList(a)); // 'abcd'




// Write a fn that takes in a linked list containing chars as values and return a string 
// containing all characters concatenated together, but in reverse order.





// incorrect output  * 
// const reverseStringList = (node) => {
//     if (node === null) return '';
//     return (node.value + reverseStringList(node.next)).split('').reverse().join('');
// };

// const reverseStringList = (node) => {
//   if (node === null) return '';
//   return reverseStringList(node.next) + node.value;
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;


// console.log(reverseStringList(a)); // 'dcba'


// const printList = (head) => {
//     let curr = head;
//     while (curr !== null) {
//         console.log(curr.value)
//         curr = curr.next;
//     }
// };

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');

// a.next = b;
// b.next = c;
// c.next = d;


// printList(a);




// const sumList = (head) => {
//     let curr = head;
//     let sum = 0;
//     while(curr !== null) {
//         sum += curr.value;
//         curr = curr.next;
//     }
//     return sum;
// }

// const a = new Node(2);
// const b = new Node(3);
// const c = new Node(1);
// const d = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
//2 -> 3 -> 1 -> 7

// console.log(sumList(a)); // 13


// Write a fn that takes in a linked list, and a targetVal. The fn should return a bool indicating
// whether or not the targetVal is contained in the linked list




const a = new Node(2);
const b = new Node(3);
const c = new Node(1);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;
// 2 -> 3 -> 1 -> 7

const contains = (head, target) => {
    let curr = head;
    while (curr !== null){
        if (curr.value === target) {
            return true
        }
        curr = curr.next;
    }
    return false;
};

// console.log(contains(a, 3)); // true
// console.log(contains(a, 7)); // true
// console.log(contains(a, 5)); // false
// console.log(contains(a, 2)); // true


/*

Connections / Edges - the arrows 

Edge cases - at the head, at the tail, or in between

To print out a linked list, we need to be able to do it iteratively and recursively 
Base case = if head = null, empty linked list
With recursion, handle where you are right now and don't look ahead

If you're creating a function to return a number, make sure in your base case you're using the same type, so use a number 

Keep in mind when you are given a head to be passed in, you have to sum the head + the recursive calls on the rest of the linked list 
*/