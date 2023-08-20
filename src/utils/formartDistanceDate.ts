import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDistanceDate(date: string) {
  return formatDistance(new Date(date), new Date(), {
    locale: ptBR,
    addSuffix: true
  })
}
