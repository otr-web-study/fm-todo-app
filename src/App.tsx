import { AppContainer } from '@/components/AppContainer';
import { AppThemeProvider } from '@/features/theme/ThemeProvider';
import { Page } from '@/components/Page';
import { Header } from '@/components/Header';
import { NewTodo } from '@/features/todo/NewTodo';
import { TodoList } from '@/features/todo/TodoList';
import { TodoControls } from '@/features/todo/TodoControls';
import { Footer } from '@/components/Footer';
import { useFetchTodo } from '@/features/todo/useFetchTodo';

function App() {
  useFetchTodo();

  return (
    <AppThemeProvider>
      <Page>
        <AppContainer>
          <Header />
          <NewTodo />
          <TodoList />
          <TodoControls />
          <Footer />
        </AppContainer>
      </Page>
    </AppThemeProvider>
  );
}

export default App;
