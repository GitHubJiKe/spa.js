import Page from '../components/Page'
import LayoutBlock from '../components/LayoutBlock'
import { $homeStore, changeSubTitle, changeTitle } from '../store'
import TextBlockWithStore from '../components/TextBlockWithStore'
import aboutPage from './about'


const homePage = new Page('Home')
    .addChild(
        new LayoutBlock('row')
            .addChild(
                new LayoutBlock('column')
                    .style('flex:1;display:flex;justify-content:center;align-items:center;')
                    .addChild(
                        new TextBlockWithStore($homeStore, 'title')
                            .style('color:white;font-size:5rem;font-weight:900;')
                            .on('click', (e) => {
                                changeTitle('欢迎使用SPA.js')
                                e.stopPropagation()
                            })
                    )
                    .addChild(
                        new TextBlockWithStore($homeStore, 'subTitle')
                            .style('color:#000;font-size:3rem;font-weight:600;')
                            .on('click', (e) => {
                                changeSubTitle('nanostores 泰裤辣！')
                                e.stopPropagation()
                            })
                    )
                    .on('click', (_e, app) => {
                        app.addPage(aboutPage)
                        app.switchTo('/about')
                    })
            )
            .style('height:100%;background-color: red;')
    )
    .path('/')
    .enter('animate__animated animate__backInLeft')
    .out('animate__animated animate__backOutLeft')

export default homePage