# spa.js

> simple way to make SPA pages for newbies in frontend.

```js
import SPA from './SPA'
import Page from './Page'
import PureBlock from './PureBlock'
import LayoutBlock from './LayoutBlock'
import TextBlock from './TextBlock'
import ImageBlock from './ImageBlock'


function FullscreenBlock() {
  return new PureBlock().style('width:100vw;height:100vh')
}

new SPA('#app')
  // 配置首页
  .addPage(
    new Page()
      .addChild(
        new LayoutBlock('row')
          .addChild(
            new LayoutBlock('column')
              .style('flex:1;display:flex;justify-content:center;align-items:center;')
              .addChild(
                new TextBlock('Welcome To SPA.js')
                  .style('color:white;font-size:5rem;font-weight:900;')
              )
              .addChild(
                new TextBlock('I am Peter Yuan')
                  .style('color:#000;font-size:3rem;font-weight:600;')
              )
              .on('click', (_e, app) => app.switchTo('/about'))
          )
          .style('height:100%;background-color: red;')
      )
      .path('/')
      .enter('animate__animated animate__backInLeft')
      .out('animate__animated animate__backOutLeft')
  )
  // 配置关于页
  .addPage(
    new Page()
      .addChild(
        new LayoutBlock('column')
          .addChild(
            FullscreenBlock()
              .style('cursor:pointer;')
              .addChild(
                new ImageBlock('https://plus.unsplash.com/premium_photo-1731948133366-0d1dbb7db851?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
                  .width('100%')
                  .height('100%')
              )
              .on('click', (_e, app) => app.switchTo('/'))
          )
          .style('height:100%;')
      )
      .path('/about')
      .enter('animate__animated animate__fadeInDown')
      .out('animate__animated animate__fadeOutDown')
  )
  .render(true)
```