import { AppContainer } from './components/AppContainer';
import { AppThemeProvider } from './components/AppThemeProvider';
import { Page } from './components/Page';

function App() {
  return (
    <AppThemeProvider>
      <Page>
        <AppContainer>
          <div>tst</div>
        </AppContainer>
      </Page>
    </AppThemeProvider>
  );
}

export default App;
