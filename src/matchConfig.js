import DemoContainer from './modules/demo/demo-container'
import { NotFoundPage } from './ui'

const matchConfig = [
  {
    path: '/',
    exact: true,
    component: DemoContainer,
    initState: DemoContainer.initState,
  },
  {
    path: '*',
    component: NotFoundPage,
    initState: DemoContainer.initState || {},
  },
]

export default matchConfig
