import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Minicurso Gratuito para Destravar o Inglês | Habilidade Ativa',
  description: 'Supere o bloqueio emocional ao falar inglês com o minicurso gratuito Habilidade Ativa. Método baseado em psicologia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
