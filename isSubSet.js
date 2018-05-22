function isSubSet(arr, sub) {
  var isSubset = true;
  sub.forEach(function(value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    } else {
      isSubset = false;
    }
  });
  return isSubset;
}
