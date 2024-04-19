class LRUNode {
	constructor() {
		this.key = '';
		this.value = '';
		this.pre = null;
		this.next = null;
	}
}
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
	this.capacity = capacity;
	this.count = 0;
	this.hash = {};

	this.head = new LRUNode();
	this.tail = new LRUNode();

	this.head.next = this.tail;
	this.tail.pre = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	if (key in this.hash) {
		let node = this.hash[key];
		
		this.remove(node);
		this.add(node);
		return node.value;
	} else {
		return -1;
	}
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	if (key in this.hash) {
		const node = this.hash[key];
		node.value = value;

		this.remove(node);
		this.add(node);
	} else {
		const newNode = new LRUNode();
		newNode.key = key;
		newNode.value = value;
		this.add(newNode);
		this.count ++;
		this.hash[key] = newNode;

		if (this.count > this.capacity) {
			const tailNode = this.tail.pre;
			this.remove(tailNode);
			delete this.hash[tailNode.key];
			this.count --;
		}
	}
};

LRUCache.prototype.remove = function(node) {
	let preNode = node.pre;
	let nextNode = node.next;

	preNode.next = nextNode;
	nextNode.pre = preNode;
};

LRUCache.prototype.add = function(node) {
	let headNode = this.head.next;
	node.next = headNode;
	headNode.pre = node;

	this.head.next = node;
	node.pre = this.head;
};