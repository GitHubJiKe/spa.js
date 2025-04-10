import Page from '../components/Page'
import LayoutBlock from '../components/LayoutBlock'
import ImageBlock from '../components/ImageBlock'
import { resetHomeStore } from '../store'
import { FullscreenBlock } from '../utils'
import TextBlock from '../components/TextBlock'

const aboutPage = new Page('About')
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
                    .addChild(new TextBlock('我是图片').style('position:absolute;left:45%;top:45%;font-size:5rem;color:red;font-weight:900;'))
                    .on('click', (_e, app) => {
                        resetHomeStore()
                        app.switchTo('/')
                    })
            )
            .style('height:100%;')
    )
    .path('/about')
    .enter('animate__animated animate__fadeInDown')
    .out('animate__animated animate__fadeOutDown')


export default aboutPage