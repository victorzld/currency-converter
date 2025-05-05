import { ThemeToggle } from "@/components/ThemeToggle";
import { CurrencyConverter } from "@/components/CurrencyConverter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex-1 flex items-center justify-center w-full">
        <CurrencyConverter />
      </div>

      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>Taxas de câmbio alimentadas pela Exchange Rate API</p>
      </footer>
    </div>
  );
};

export default Index;
