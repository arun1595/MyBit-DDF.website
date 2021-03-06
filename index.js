import Head from 'next/head'

export default ({ children }) =>
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='/_next/static/style.css' />
      <link rel='stylesheet' href='/static/font.css' />
    </Head>
    {children}
  </div>
