import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/shared/ui/root-layout/rootLayout.tsx'
import { MainPage } from '@/pages/main/mainPage.tsx'

export const appRouterConfig = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      /* For example */
      /*{
        path: '/list',
        element: <ListLayout />,
        children: [
          {
            index: true,
            element: <TodoListPage />,
          },
          {
            path: ':id',
            element: <TodoDetailsPage />,
          },
        ],
      },*/
    ],
  },
])
