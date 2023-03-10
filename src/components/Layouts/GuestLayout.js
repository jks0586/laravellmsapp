import Head from 'next/head'
const GuestLayout = ({ children }) => {
    return (
        <div className='site-guest'>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout
