export default function (dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
  } catch (error) {
    return dateString
  }
}
