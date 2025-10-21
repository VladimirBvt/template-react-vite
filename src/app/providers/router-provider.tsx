import { RouterProvider } from 'react-router-dom'
import { appRouterConfig } from '@/shared/config/router-config/routerConfig.tsx'

export const RouterProviderComponent = () => {
  return <RouterProvider router={appRouterConfig} />
}
