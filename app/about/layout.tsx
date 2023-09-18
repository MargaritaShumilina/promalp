import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компани ПромАльп',
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
        <main>{children}</main>
      </body>
    </html>
  );
}
