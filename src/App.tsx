import { AppContainer } from '@/components/AppContainer';
import { AppThemeProvider } from '@/features/theme/ThemeProvider';
import { Page } from '@/components/Page';
import { Header } from './components/Header';
import { NewTodo } from '@/features/todo/NewTodo';
import { useFetchTodo } from '@/features/todo/useFetchTodo';

function App() {
  useFetchTodo();

  return (
    <AppThemeProvider>
      <Page>
        <AppContainer>
          <Header />
          <NewTodo />
        </AppContainer>
      </Page>
    </AppThemeProvider>
  );
}

export default App;
