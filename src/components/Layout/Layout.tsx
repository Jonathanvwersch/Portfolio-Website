import * as React from "react"
import { ReactNode } from "react"
import Seo from "../seo"
import { DarkThemeProvider } from "../../contexts/DarkThemeContext"
import InsideLayout from "./InsideLayout"

type Props = {
  children: ReactNode
  title: string
  hideLinks?: boolean
  dataAnimation?: string
}

const Layout = ({ children, title, hideLinks, dataAnimation }: Props) => {
  return (
    <DarkThemeProvider>
      <Seo title={title} />
      <InsideLayout hideLinks={hideLinks} dataAnimation={dataAnimation}>
        {children}
      </InsideLayout>
    </DarkThemeProvider>
  )
}

export default Layout
