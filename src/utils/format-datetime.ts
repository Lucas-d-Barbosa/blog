import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);
  return format(date, "dd/MM/yyyy 'às' HH'h'mm'm'", {
    locale: ptBR,
  });
}

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
const rawDate = new Date().toISOString();
console.log(formatRelativeDate(rawDate));
