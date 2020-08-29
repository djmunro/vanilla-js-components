function makeFirstRow() {
  for (let i = 0; i < 101; i++) {
    let div = document.createElement('div')
    div.classList.add(randomBinary() ? 'active': 'inactive')
    document.querySelector('#row').appendChild(div)
  }
}

function randomBinary() {
  let max = 1,
    min = 0
  return Math.floor(Math.random() * (max - min + 1))
}

function createNewRow() {
  // copy row 
  const rows = document.querySelectorAll('#row')
  const lastRow = rows[rows.length-1]
  targetRow = lastRow.cloneNode(true)
  //   document.querySelector('body').appendChild(targetRow)

  // iterate over old row/new row and apply runs
  const children = lastRow.children
  for(let i = 0; i < children.length; i++) {
    // apply rules
    left = children[i].previousSibling
    if (left == null) {
      left = children[children.length-1]
    }
    previousNode = children[i]
    right = children[i].nextSibling
    if (right == null) {
      right = children[0]
    }

    // apply rules
    let x = setActiveIfMatchesRules
      .bind(null, targetRow.children[i], left, previousNode, right)

    x([1, 1, 1], false)
    x([1, 1, 0], true)
    x([1, 0, 1], false)
    x([1, 0, 0], false)
    x([0, 1, 1], true)
    x([0, 1, 0], false)
    x([0, 0, 1], true)
    x([0, 0, 0], true)
  }
  document.querySelector('.container').appendChild(targetRow)
}

function setActiveIfMatchesRules(target, left, previousNode, right, rule, state) {
  if (
    getState(left) == rule[0] &&
    getState(previousNode) == rule[1] &&
    getState(right) == rule[2]
  ) {
    setNodeState(target, state)
  }
}

function getState(node) {
  return node.classList.contains('active') ? 1 : 0
}

function setNodeState(node, state) {
  node.classList = ''
  // console.log('state ', state ? 'active' : 'inactive')
  node.classList.add(state ? 'active' : 'inactive')
}

// makeFirstRow()
// for (let i = 0; i < 101; i++) {
//   createNewRow()
// }

function makeRows() {
  const rows = document.querySelector('#row')
  console.log(rows.length)
  if (rows.length > 20) {
    console.log('here')
    for(let i = 0; i < 10; i++) {
      rows.parentNode.removeChild(rows[i])
    }
  }
  createNewRow()
}

makeFirstRow()
setInterval(makeRows, 100)