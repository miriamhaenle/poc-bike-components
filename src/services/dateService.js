export function toDomString(date) {
  date = new Date(date)
  if (date instanceof Date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    let day = date.getDate()

    if (day.length === 1) {
      day = String(0) + String(day)
    }

    return `${year}-${month}-${day}`
  }
}
