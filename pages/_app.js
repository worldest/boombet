import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
    
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/apexcharts"></Script>
<Script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></Script>
    <Component {...pageProps} />
    </>
    );
    
}
export default MyApp
