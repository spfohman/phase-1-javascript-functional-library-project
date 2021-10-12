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
    let newThing = callBack(thing);
    if(!acc){
        acc = newThing[0];
        newThing = newThing.slice(1);
    }
    
    for (let i = 0; i <newThing.length; i ++){
		acc = callback(acc, newThing[i], newThing)
        
	}
	return acc;
    
}
function myFind(thing, predicate){
    //const present = (e)=> e===predicate; 
    
    const newThing = callBack(thing);
    for(let i = 0; i < newThing.length; i++){
        if(predicate(newThing[i])){
            return newThing[i];
            
        }
        
    }
    return undefined;
}
function myFilter(thing, predicate){
    const newThing = callBack(thing);
    let newValues = [];
    for(let i = 0; i< newThing.length; i++){
        if(predicate(newThing[i])){
            newValues.push(newThing[i])
        }
    }
    return newValues;
}

function mySize(thing){
    const newThing = callBack(thing);
    return newThing.length;
}
//ARRAY FUNCTIONS

function myFirst(array, n){
    if(!n){
        return array[0]
    }else{
        let f= array.slice(0, n);
        return f;
    }
    

}
function myLast(array, n){
    if(!n){
        return array[array.length-1]
    }else{
        let l= array.slice(-n);
    return l;
    }
    
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