import "@/styles/globals/globals.scss";
import StyledComponentsRegistry from "@/components/registry";
import AnalyticsProvider from "@/lib/analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <AnalyticsProvider>{children}</AnalyticsProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
