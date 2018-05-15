var recipes = {eggs:3, milk: "1cup", flour: "3cups"}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}