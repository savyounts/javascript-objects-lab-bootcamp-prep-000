var recipes = {eggs:3, milk: "1cup", flour: "3cups"}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, { [key]: value })
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key) {
  Object.assign
}