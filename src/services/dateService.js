export function toDomString(date) {
  date = new Date(date)
  if (isValidDate(date)) {
    const year = date.getFullYear()
    const month = ('0' + String(date.getMonth() + 1)).slice(-2)
    const day = ('0' + String(date.getDate())).slice(-2)

    return `${year}-${month}-${day}`
  }
}

export function isValidDate(date) {
  return date instanceof Date && !isNaN(date)
}
