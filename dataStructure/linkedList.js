//constructor Functions
// function linkedList(){
//   this.head = null;
//   this.tail = null;
// }
// function Node (next,prev,value){
//   this.next = next;
//   this.prev = prev;
//   this.value = value;
// };
//
// //creating head nodes
// linkedList.prototype.addToHead = function(value){
//   const newNode = new Node (value, this.head, null);
//   if (this.head) this.head.prev= newNode;
//     else this.tail = newNode;
//           this.head = newNode;
//
// }
// const list =new linkedList();
// list.addToHead(100);
// list.addToHead(49);
// console.log(list);

//create another list with 3 nodes
// //access the middles node in our console
// //console.log middle node value
//
// //constructor Functions
// function linkedList(){
//   this.head = null;
//   this.tail = null;
// }
// function Node (next,prev,value){
//   this.next = next;
//   this.prev = prev;
//   this.value = value;
// };
// //creating head nodes
// linkedList.prototype.addToHead = function(value){
//   const newNode = new Node(value, this.head, null);
//   if (this.head) this.head.prev = newNode;
//     else this.tail = newNode;
//     this.head = newNode;
//
// };
//   const list2 = new linkedList();
//   list2.addToHead(100);
//   list2.addToHead(200);
//   list2.addToHead(300);
//   console.log(list2);
// console.log(`middle Node value: ${list2.head.next.value}`);
// Constructor Functions
function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev){
  this.value = value;
  this.prev = prev;
  this.next = next;

};

// Creating Head Node
LinkedList.prototype.addToHead = function(value){
  const newNode = new Node(value, this.head, null);
// this variable stores newNode and new node objects
// value is the value we pass in our addToHead method
// this.head is null at firest so next property is null
// previous attribulte is going to be null because we pass it in the 3rd parameter
  if (this.head) this.head.prev = newNode;
// if the head exists then the previous value is going to e the newNode(new head)
// if there is not a node the actual node we create will be the head and taill
  else this.tail = newNode;
  this.head = newNode;
};

// prototype - all JavaScript object inherit properties and methods from a prototype
//  to add a new property to a constructor you add it to the constructor function
// Creating 2 nodes
// const list = new LinkedList();
// list.addToHead(100);
// list.addToHead(200);
// console.log(list);
//  head node has a value of 200 and the next proerty is the tail object. there is no previous object becaue the is no previous

// Create a new  list with 3 new node
// Access the middle node in our console.
// console.log middle node value
const list2 = new LinkedList();
list2.addToHead(100);
list2.addToHead(200);// middle node
list2.addToHead(300);
console.log(list2);
console.log(`Middle Node value: ${list2.head.next.value}`);
