import '@/app/ui/global.css';
import {michroma} from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${michroma.className} antialiased`}>{children}</body>
    </html>
  );
}
