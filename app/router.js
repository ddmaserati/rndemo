import React, { Component } from 'react';
import {
    Scene,
    Router,
    Lightbox, Drawer
} from 'react-native-router-flux';

import WelcomePage from "./components/WelComePage"
import DynamicPage from "./components/DynamicPage"
import MyPage from "./components/MyPage"
import TrendPage from "./components/TrendPage"
import mainTabPage from "./components/mainTabPage"
import styles from './style'
import * as Constant from './style/constant'
import TabIcon from './components/widget/TabIcon'
import Test from './components/Test'
/**
 * 全局路由
 */
const getRouter = () => {
    return (
        <Router

        getSceneStyle={() => {
            return styles.routerStyle
        }}
        // backAndroidHandler={
        //   }
        >
            <Lightbox>
           
                <Scene key="main">
                    <Scene key="WelcomePage" component={WelcomePage}  hideNavBar hideTabBar hide />
                </Scene>

                <Scene key="root"
                 navigationBarStyle={styles.navigationBar}
                 titleStyle={{color: Constant.titleTextColor}}
                 
                >
                
              
                     
                    <Scene
                        key="mainTabPage"
                      
                       
                        tabs
                        lazy
                        wrap={false}
                        showLabel={false}
                        tabBarPosition={"bottom"}
                        title='appName'
                        tabBarStyle={{
                            height: Constant.tabBarHeight,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Constant.tabBackgroundColor
                        }}
                      
                        >

                        <Scene
                            key="DynamicPage"
                            component={DynamicPage}
                            icon={TabIcon}
                            tabIconName={'DynamicPage'}
                            title='动态'
                        />

                        <Scene
                            key="TrendPage"
                            component={TrendPage}
                            icon={TabIcon}
                            tabIconName={'TrendPage'}
                            title='推荐'
                        />

<Scene
                            key="MyPage"
                            component={MyPage}
                            icon={TabIcon}
                            tabIconName={'tabMy'}
                            title='我的'
                        />


                    </Scene>

                  
                </Scene>
                <Scene key="test"
               
                component={Test}></Scene>
            </Lightbox>
           
        </Router>
    )
};


export default getRouter;