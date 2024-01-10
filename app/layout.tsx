import "@/app/ui/global.css"
import {inter} from '@/app/ui/fonts'
// 所有地下的都会使用这套UI
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
