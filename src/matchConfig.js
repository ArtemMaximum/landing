import PreloadHelloWorld from './modules/containers/PreloadHelloWorld'
// import { NotFoundPage } from './ui'

const matchConfig = [
  {
    path: '/',
    component: PreloadHelloWorld,
    initState: PreloadHelloWorld.initState,
  },
]

export default matchConfig
