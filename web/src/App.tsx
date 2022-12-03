import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header/index';
import { Orders } from './components/Orders/index';

export function App() {
  return (
    // <> é o mesmo de colocar <React.Fragment>
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
