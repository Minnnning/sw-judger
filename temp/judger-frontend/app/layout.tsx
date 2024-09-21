import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import Providers from '@/utils/Providers';

export const metadata = {
  title: 'SW Online Judge',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className="text-sm">
        <Providers>
          <Navbar />
          <main className="w-full mx-auto pt-20 mb-14">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
