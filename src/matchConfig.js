import DemoContainer from './modules/containers/demo'
// import { NotFoundPage } from './ui'

const matchConfig = [
  {
    path: '/',
    component: DemoContainer,
    initState: DemoContainer.initState,
  },
]

export default matchConfig
