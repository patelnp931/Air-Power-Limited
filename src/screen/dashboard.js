import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator, Dimensions, BackHandler, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const INJECTED_JAVASCRIPT = 'const meta = document.createElement(\'meta\'); meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0\'); meta.setAttribute(\'name\', \'viewport\'); document.getElementsByTagName(\'head\')[0].appendChild(meta);'
export class dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            urlweb: 'https://airpowerltd.com.ng/?sid=app',
            backpress: false
        },
            this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        if (this.props.navigation.isFocused()) {
            if (this.webref) {
                console.log("urlweb==>", this.state.urlweb);
                if (this.state.urlweb == 'https://airpowerltd.com.ng/?sid=app') {
                    BackHandler.exitApp();
                } else {
                    this.webref.goBack();
                    this.webref.goBack();
                    this.setState({ backpress: true, loading: true })
                }
                return true;
            }
            return true;
        } else {
            return false;
        }
    }


    _onNavigationStateChangeHandler = ({ url }) => {
        let str = url
        if (url.includes('?sid=app')) {
            str = str.substring(0, str.length - 8);
        }
        console.log("url==>", str);
        if (url.includes('#')) {
            this.setState({ loading: false })
        }
        else if (!str.includes('?sid=app') && url != this.state.urlweb) {
            console.log("2nd if");
            this.setState({ backpress: false, loading: true, urlweb: str + '?sid=app' })
        }
    }

    // _onNavigationStateChangeHandler = ({ url }) => {
    //     if (url.includes('#')) {
    //         alert('call')
    //         this.setState({ loading: false })
    //     }
    //     else if (url != this.state.urlweb) {
    //         alert('call else')
    //         this.setState({ loading: true, urlweb: url + '?sid=app' })
    //     }
    // }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <WebView
                    onLoad={() => this.setState({ loading: false })}
                    style={{ flex: 1 }}
                    ref={r => (this.webref = r)}
                    injectedJavaScript={INJECTED_JAVASCRIPT + "document.body.style.userSelect = 'none'"}
                    source={{ uri: this.state.urlweb }}
                    onNavigationStateChange={this._onNavigationStateChangeHandler.bind(this)}
                />

                {this.state.loading && (
                    <ActivityIndicator
                        style={styles.spinner}
                        size="large"
                        color='#16163f'
                    />
                )}
            </SafeAreaView>
        )
    }
}

export default dashboard



const styles = StyleSheet.create({
    spinner: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 99999,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffab',
    }
});