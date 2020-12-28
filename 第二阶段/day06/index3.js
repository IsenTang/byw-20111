function Queue(){

    this.data = [];

    this.push = function(ele){

        this.data.push(ele);
    }

    this.shift = function(){

        this.data.shift();
    }

    this.top = function(){

        return this.data[0];
    }

    this.isEmpty = function(){

        return this.data.length === 0;
    }

    this.size = function(){

        return this.data.length
    }

    this.clear = function(){

        this.data = [];
    }
}

var q1 = new Queue();
q1.push(1);
q1.push(2);
q1.push(2222);

// q1.shift();
console.log(q1.data);
console.log(q1.top());

q1.clear();
console.log(q1.size());