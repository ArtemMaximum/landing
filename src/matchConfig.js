import DemoContainer from './modules/demo/demo-container'
// import { NotFoundPage } from './ui'

const matchConfig = [
  {
    path: '/',
    component: DemoContainer,
    initState: DemoContainer.initState,
  },
]

export default matchConfig
