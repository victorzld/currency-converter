import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";
import {
  commonCurrencies,
  convertCurrency,
  fetchLatestRates,
  formatCurrency,
  getCurrencySymbol,
} from "@/services/currencyApi";
import { toast } from "sonner";

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [currencyRates, setCurrencyRates] = useState<Record<string, number>>(
    {}
  );
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    async function loadRates() {
      setLoading(true);
      try {
        const rates = await fetchLatestRates(fromCurrency);
        setCurrencyRates(rates);
        setLastUpdated(new Date());

        if (rates[toCurrency]) {
          const converted = convertCurrency(amount, 1, rates[toCurrency]);
          setResult(converted);
        }
      } catch (error) {
        console.error("Falha ao carregar as taxas", error);
        toast.error("Falha ao carregar as taxas de câmbio");
      } finally {
        setLoading(false);
      }
    }

    loadRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (currencyRates[toCurrency]) {
      const converted = convertCurrency(amount, 1, currencyRates[toCurrency]);
      setResult(converted);
    }
  }, [amount, toCurrency, currencyRates]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleRefreshRates = async () => {
    setLoading(true);
    try {
      const rates = await fetchLatestRates(fromCurrency);
      setCurrencyRates(rates);
      setLastUpdated(new Date());

      if (rates[toCurrency]) {
        const converted = convertCurrency(amount, 1, rates[toCurrency]);
        setResult(converted);
      }
      toast.success("Taxas de câmbio atualizadas");
    } catch (error) {
      console.error("Falha ao atualizar as taxas", error);
      toast.error("Falha ao atualizar as taxas de câmbio");
    } finally {
      setLoading(false);
    }
  };

  const getExchangeRateInfo = () => {
    if (!currencyRates[toCurrency]) return "Carregando a taxa de câmbio....";

    const rate = currencyRates[toCurrency];
    const fromSymbol = getCurrencySymbol(fromCurrency);
    const toSymbol = getCurrencySymbol(toCurrency);

    return `1 ${fromSymbol} = ${toSymbol} ${rate.toFixed(4)} `;
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return "";

    return lastUpdated.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto glass-card animate-fade-in">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Seu dólar Hoje !
        </CardTitle>
        <CardDescription className="text-center">
          {loading
            ? "Buscando as taxas de câmbio mais recentes..."
            : lastUpdated
            ? `Tarifas atualizadas em ${formatLastUpdated()}`
            : ""}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Amount Input */}
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">
            Digite o valor:
          </label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Enter amount"
              className="pr-10"
              min={0}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {getCurrencySymbol(fromCurrency)}
            </span>
          </div>
        </div>

        {/* From Currency */}
        <div className="space-y-2">
          <label htmlFor="fromCurrency" className="text-sm font-medium">
            De:
          </label>
          <Select value={fromCurrency} onValueChange={setFromCurrency}>
            <SelectTrigger id="fromCurrency" className="w-full">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {commonCurrencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  {currency.symbol} {currency.code} - {currency.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwapCurrencies}
            className="rounded-full"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* To Currency */}
        <div className="space-y-2">
          <label htmlFor="toCurrency" className="text-sm font-medium">
            Para:
          </label>
          <Select value={toCurrency} onValueChange={setToCurrency}>
            <SelectTrigger id="toCurrency" className="w-full">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              {commonCurrencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  {currency.symbol} {currency.code} - {currency.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Result Card */}
        <div
          className={`p-4 rounded-lg text-center transition-all duration-200 bg-secondary dark:bg-accent ${
            loading ? "animate-pulse-slow" : "animate-slide-up"
          }`}
        >
          <div className="text-sm font-medium text-muted-foreground mb-1">
            {getExchangeRateInfo()}
          </div>
          <div className="text-2xl font-bold">
            {result !== null
              ? formatCurrency(
                  result,
                  toCurrency,
                  getCurrencySymbol(toCurrency)
                )
              : "..."}
          </div>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-center">
          <Button
            variant="default"
            onClick={handleRefreshRates}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Atualizando..." : "Atualize a conversão"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
