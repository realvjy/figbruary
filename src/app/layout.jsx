
import '@/styles/globals/globals.scss';
import StyledComponentsRegistry from "@/components/registry";
 

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
};