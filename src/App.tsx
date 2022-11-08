import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './routes/Todo/Todo';
import Focus from './routes/Focus/Focus';
import NotFound from './routes/NotFound/NotFound';
import { store } from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Focus />,
    errorElement: <NotFound />
  },
  {
    path: "/todo",
    element: <Todo />
  },
  {
    path: "/focus",
    element: <Focus />
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
