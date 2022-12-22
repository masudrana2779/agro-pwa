import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {wrapper} from "../redux/store";
import {Provider} from "react-redux";

 const App = ({ Component, pageProps, ...rest }: AppProps) => {
   const {store} = wrapper.useWrappedStore(rest);
   console.log(store);
     return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default App;
