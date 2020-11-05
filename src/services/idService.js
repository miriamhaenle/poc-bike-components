export function createID() {
  const result = generateId().next()
  return result.value
}

function* generateId() {
  while (true) {
    yield Date.now()
  }
}
