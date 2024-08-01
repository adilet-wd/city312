import "@/app/ui/global.scss";
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import Header from "./ui/components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
          {children}
          
        <footer>footer</footer>
      </body>
    </html>
  );
}
