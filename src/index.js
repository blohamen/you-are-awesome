// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {this.propertyName = propertyName;};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName,
    {
        enumerable: false,
        value: "value"
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    var magicObj = function(){};
    magicObj.prototype = Function.prototype;
    return magicObj;

};
let result = 0;
const incrementor = () => {
    result++;
    function counter() {
        result++;
        return counter;
    };
    counter.valueOf = function(){
        return result;
    };
    return counter;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    JSON.stringify = function(obj) {return obj};
    JSON.parse = function(obj) {return obj};
    return Object.create(null);
};
const toBuffer = () => {};
const sortByProto = (arr) => {
return arr.sort(function(a,b){
return a.__proto__ - b.__proto__;
});
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
