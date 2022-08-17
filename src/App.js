import { Fragment } from 'react';
import Header from './componensts/Layout/Header';
import Meals from './componensts/Meals/Meals';

function App() {
   return (
      <Fragment>
         <Header />
         <main>
            <Meals />
         </main>
      </Fragment>
   );
}

export default App;
