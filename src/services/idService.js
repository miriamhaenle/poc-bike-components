const idCache = new Set()

export function createID() {
  const result = generateId().next()
  if (idCache.has(result.value)) {
    return createID()
  }
  idCache.add(result.value)
  return result.value
}

function* generateId() {
  while (true) {
    yield Date.now()
  }
}
