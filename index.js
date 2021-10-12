function callBack(thing){
    return(thing instanceof Array) ? thing.slice() : Object.values(thing);
}

function myEach(thing, alert){
    const newThing = callBack(thing);
    for(let i = 0; i < newThing.length; i ++){
        alert(newThing[i]);
    }
    return thing;
}

function myMap(thing, callback){
    const newThing = callBack(thing);
    let newArray = []
    for(let i = 0; i < newThing.length; i++){
        newArray.push(callback(newThing[i]));
    }
    return newArray;
}
function myReduce(thing, callback, acc){
    const newThing = callBack(thing);
    
    for (let i = 0; i <newThing.length; i ++){
		acc = callback(newThing[i], newThing)
        //return sum;
	}
	return acc;
    
}
function myFind(thing, predicate){
    const present = (e)=> e===predicate; 
    const newThing = callBack(thing);
    for(let i = 0; i < newThing.length; i++){
        if(present(newThing[i])){
            return newThing[i];
            
        }
        return undefined;
    }
}
function myFilter(thing, predicate){
    const newThing = callBack(thing);

}

function mySize(thing){
    const newThing = callBack(thing);
    return newThing.length;
}
//ARRAY FUNCTIONS

function myFirst(array, n){
    let f= array.slice(n);
    return f;

}
function myLast(array, n){
    let l= array.slice(-n);
    return l;
}
function mySortBy(array, callback){

}
function myFlatten(array,){

}
//OBJECT FUNCTIONS

function myKeys(object){
    const k = Object.keys(object);
    return k;
}
function myValues(object){
    const v = Object.values(object);
    return v;
}