// NOTE I HAVE IMPLEMENTED A STACK USING A SIMPLIFIED VERSION OF THE LINKED LIST IMPLEMENTATION

// NOTE: As it is a stack, this particular type of linked list only has to worry about tail operations and 'previous'.

function Stack() {
	this.tail = null
}

Stack.prototype.addToTail = function(value) {
	const node = {value, previous: null}

	if (!this.tail) {
		this.tail = node
		return 
	}
	node.previous = this.tail
	this.tail = node
};


Stack.prototype.removeFromTail = function() {
	if (!this.tail) {
		return null
	}
	const value = this.tail.value
	this.tail = this.tail.previous
	return value
};
