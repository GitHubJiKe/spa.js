import SPA from './SPA.js'
import Page from './Page.js'
import PureBlock from './PureBlock.js'
import LayoutBlock from './LayoutBlock.js'
import TextBlock from './TextBlock.js'
import ImageBlock from './ImageBlock.js'

const app = new SPA('#app')

// page home
const pageHome = new Page()

const layoutRow = new LayoutBlock('row')

const pureBlock1 = new PureBlock()
pureBlock1
  .style('background-color: red;flex:1;')
  .addChild(new TextBlock('Welcome To'))
const pureBlock2 = new PureBlock()
pureBlock2
  .style('background-color: blue;flex:1;cursor:pointer;')
  .addChild(
    new ImageBlock(
      'https://plus.unsplash.com/premium_photo-1731948133366-0d1dbb7db851?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    )
      .width('100%')
      .height('100%'),
  )
  .on('click', () => {
    app.switchTo('/about')
  })
layoutRow.addChild(pureBlock1).addChild(pureBlock2).style('height:100%;')
pageHome
  .addChild(layoutRow)
  .path('/')
  .enter('animate__animated animate__backInLeft')
  .out('animate__animated animate__backOutLeft')

// page about
const pageAbout = new Page()
const layoutCol = new LayoutBlock('column')
const pureBlock4 = new LayoutBlock('column')
const imageBlock = new ImageBlock(
  'https://plus.unsplash.com/premium_photo-1731948133366-0d1dbb7db851?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
)
  .width('100vw')
  .height('100vh')
pureBlock4
  .style('background-color: green;flex:1;cursor:pointer;')
  .addChild(imageBlock)
  .on('click', () => {
    app.switchTo('/')
  })
layoutCol.addChild(pureBlock4).style('height:100%;')
pageAbout
  .addChild(layoutCol)
  .path('/about')
  .enter('animate__animated animate__fadeInDown')
  .out('animate__animated animate__fadeOutDown')

// app config
app.addPage(pageHome).addPage(pageAbout)

app.render(true)
