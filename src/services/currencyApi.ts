import { toast } from "sonner";

export interface CurrencyRate {
  code: string;
  value: number;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export const commonCurrencies: Currency[] = [
  { code: "USD", name: "Dólar americano", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "Libra esterlina", symbol: "£" },
  { code: "JPY", name: "Iene japonês", symbol: "¥" },
  { code: "BRL", name: "Real brasileiro", symbol: "R$" },
  { code: "CAD", name: "Dólar canadense", symbol: "C$" },
  { code: "AUD", name: "Dólar australiano", symbol: "A$" },
  { code: "CHF", name: "Franco suíço", symbol: "Fr" },
  { code: "CNY", name: "Yuan chinês", symbol: "¥" },
  { code: "INR", name: "Rúpia indiana", symbol: "₹" },
  { code: "MXN", name: "Peso mexicano", symbol: "$" },
  { code: "RUB", name: "Rublo russo", symbol: "₽" },
  { code: "ARS", name: "Peso argentino", symbol: "$" },
  { code: "AED", name: "Dirham dos Emirados Árabes Unidos", symbol: "د.إ" },
  { code: "AFN", name: "Afegane", symbol: "؋" },
  { code: "ALL", name: "Lek albanês", symbol: "Lek" },
  { code: "AMD", name: "Dram armênio", symbol: "֏" },
  { code: "ANG", name: "Florim das Antilhas Holandesas", symbol: "ƒ" },
  { code: "AOA", name: "Kwanza angolano", symbol: "Kz" },
  { code: "AWG", name: "Florim de Aruba", symbol: "ƒ" },
  { code: "AZN", name: "Manat azeri", symbol: "₼" },
  {
    code: "BAM",
    name: "Marco conversível da Bósnia e Herzegovina",
    symbol: "KM",
  },
  { code: "BBD", name: "Dólar barbadense", symbol: "$" },
  { code: "BDT", name: "Taka bengali", symbol: "৳" },
  { code: "BGN", name: "Lev búlgaro", symbol: "лв" },
  { code: "BHD", name: "Dinar bareinita", symbol: ".د.ب" },
  { code: "BIF", name: "Franco burundiano", symbol: "Fr" },
  { code: "BMD", name: "Dólar bermudense", symbol: "$" },
  { code: "BND", name: "Dólar do Brunei", symbol: "$" },
  { code: "BOB", name: "Boliviano", symbol: "Bs." },
  { code: "BSD", name: "Dólar das Bahamas", symbol: "$" },
  { code: "BTN", name: "Ngultrum butanês", symbol: "Nu." },
  { code: "BWP", name: "Pula botsuanesa", symbol: "P" },
  { code: "BYN", name: "Rublo bielorrusso", symbol: "Br" },
  { code: "BZD", name: "Dólar belizenho", symbol: "BZ$" },
  { code: "CDF", name: "Franco congolês", symbol: "Fr" },
  { code: "CLP", name: "Peso chileno", symbol: "$" },
  { code: "COP", name: "Peso colombiano", symbol: "$" },
  { code: "CRC", name: "Colón costarriquenho", symbol: "₡" },
  { code: "CUP", name: "Peso cubano", symbol: "$" },
  { code: "CVE", name: "Escudo cabo-verdiano", symbol: "$" },
  { code: "CZK", name: "Coroa checa", symbol: "Kč" },
  { code: "DJF", name: "Franco do Djibuti", symbol: "Fdj" },
  { code: "DKK", name: "Coroa dinamarquesa", symbol: "kr" },
  { code: "DOP", name: "Peso dominicano", symbol: "RD$" },
  { code: "DZD", name: "Dinar argelino", symbol: "د.ج" },
  { code: "EGP", name: "Libra egípcia", symbol: "£" },
  { code: "ERN", name: "Nakfa eritreu", symbol: "Nfk" },
  { code: "ETB", name: "Birr etíope", symbol: "Br" },
  { code: "FJD", name: "Dólar fijiano", symbol: "$" },
  { code: "FKP", name: "Libra das Ilhas Malvinas", symbol: "£" },
  { code: "GEL", name: "Lari georgiano", symbol: "₾" },
  { code: "GHS", name: "Cedi ganês", symbol: "₵" },
  { code: "GIP", name: "Libra de Gibraltar", symbol: "£" },
  { code: "GMD", name: "Dalasi gambiano", symbol: "D" },
  { code: "GNF", name: "Franco guineense", symbol: "FG" },
  { code: "GTQ", name: "Quetzal guatemalteco", symbol: "Q" },
  { code: "GYD", name: "Dólar guianense", symbol: "$" },
  { code: "HKD", name: "Dólar de Hong Kong", symbol: "$" },
  { code: "HNL", name: "Lempira hondurenha", symbol: "L" },
  { code: "HRK", name: "Kuna croata", symbol: "kn" },
  { code: "HTG", name: "Gourde haitiano", symbol: "G" },
  { code: "HUF", name: "Florim húngaro", symbol: "Ft" },
  { code: "IDR", name: "Rupia indonésia", symbol: "Rp" },
  { code: "ILS", name: "Novo shekel israelense", symbol: "₪" },
  { code: "IQD", name: "Dinar iraquiano", symbol: "ع.د" },
  { code: "IRR", name: "Rial iraniano", symbol: "﷼" },
  { code: "ISK", name: "Coroa islandesa", symbol: "kr" },
  { code: "JMD", name: "Dólar jamaicano", symbol: "J$" },
  { code: "JOD", name: "Dinar jordaniano", symbol: "د.ا" },
  { code: "KES", name: "Xelim queniano", symbol: "Sh" },
  { code: "KGS", name: "Som quirguiz", symbol: "с" },
  { code: "KHR", name: "Riel cambojano", symbol: "៛" },
  { code: "KMF", name: "Franco comorense", symbol: "Fr" },
  { code: "KPW", name: "Won norte-coreano", symbol: "₩" },
  { code: "KRW", name: "Won sul-coreano", symbol: "₩" },
  { code: "KWD", name: "Dinar kuwaitiano", symbol: "د.ك" },
  { code: "KYD", name: "Dólar das Ilhas Cayman", symbol: "$" },
  { code: "KZT", name: "Tenge cazaque", symbol: "₸" },
  { code: "LAK", name: "Kip laosiano", symbol: "₭" },
  { code: "LBP", name: "Libra libanesa", symbol: "ل.ل" },
  { code: "LKR", name: "Rupia do Sri Lanka", symbol: "Rs" },
  { code: "LRD", name: "Dólar liberiano", symbol: "$" },
  { code: "LSL", name: "Loti do Lesoto", symbol: "L" },
  { code: "LYD", name: "Dinar líbio", symbol: "ل.د" },
  { code: "MAD", name: "Dirham marroquino", symbol: "د.م." },
  { code: "MDL", name: "Leu moldavo", symbol: "L" },
  { code: "MGA", name: "Ariary malgaxe", symbol: "Ar" },
  { code: "MKD", name: "Dinar macedônio", symbol: "ден" },
  { code: "MMK", name: "Kyat mianmarense", symbol: "K" },
];

const API_URL = "https://open.er-api.com/v6/latest";

export async function fetchLatestRates(
  baseCurrency: string = "USD"
): Promise<Record<string, number>> {
  try {
    const response = await fetch(`${API_URL}/${baseCurrency}`);
    if (!response.ok) {
      throw new Error("Failed to fetch currency rates");
    }

    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Erro ao buscar taxas:", error);
    toast.error(
      "Falha ao buscar as taxas de câmbio. Tente novamente mais tarde.."
    );
    return {};
  }
}

export function convertCurrency(
  amount: number,
  fromRate: number,
  toRate: number
): number {
  if (fromRate === 0) return 0;
  return (amount * toRate) / fromRate;
}

export function formatCurrency(
  amount: number,
  currency: string,
  currencySymbol?: string
): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });

  let formatted = formatter.format(amount);

  if (currencySymbol) {
    formatted = formatted.replace(/^[^\d\s]+/, currencySymbol);
  }

  return formatted;
}

export function getCurrencySymbol(code: string): string {
  const currency = commonCurrencies.find((c) => c.code === code);
  return currency?.symbol || code;
}

export function getCurrencyName(code: string): string {
  const currency = commonCurrencies.find((c) => c.code === code);
  return currency?.name || code;
}
