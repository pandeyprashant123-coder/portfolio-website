import './globals.css'
import { Children } from 'react'


export const metadata = {
    title: "Prashnta Pandey",
    description: ""
}

const rootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body suppressHydrationWarning={true}>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default rootLayout