import React, {PureComponent} from 'react';
import homeStyle from './style.module.css'

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={homeStyle.title}>我是Home标题</h2>
                <div className={homeStyle.banner}>
                    <p>我是轮播图</p>
                </div>
            </div>
        );
    }
}

export default Home;