import Header from '../components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная страница ПромАльп',
  description: 'Описание главной страницы ПромАльп',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header time='Mon - Sat 9.00 - 18.00
Sunday Closed' email='contact@logistics.com' phone='(00) 112 365 489'/>
        <main>{children}</main>
      </body>
    </html>
  );
}
