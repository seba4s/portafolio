import OnePage from './OnePage';
import { ThemeProvider } from './context/theme-context';

export default function App() {
  return (
    <ThemeProvider>
      <OnePage />
    </ThemeProvider>
  );
}
