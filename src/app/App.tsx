import OnePage from './OnePage';
import { ThemeProvider } from './context/theme-context';
import { LanguageProvider } from './context/language-context';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <OnePage />
      </LanguageProvider>
    </ThemeProvider>
  );
}
