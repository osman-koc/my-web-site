import type { Metadata } from 'next';

import { sharedMetadata } from '@/lib/shared-metadata';

export const metadata: Metadata = {
  title: 'Math Puzzle Support',
  description: 'Help with Math Puzzle / İşlem Bulmaca accounts and game progress.'
};

export default async function MathPuzzleSupport({
  searchParams
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;
  const turkish = lang === 'tr';

  return (
    <main className="mx-auto max-w-2xl space-y-6 px-6 py-12">
      <h1 className="text-3xl font-bold">
        {turkish ? 'İşlem Bulmaca Destek' : 'Math Puzzle Support'}
      </h1>
      <p>
        {turkish
          ? 'Oyun, hesap veya skorlarla ilgili yardım için bizimle iletişime geçin.'
          : 'Contact us for help with the game, your account, or scores.'}
      </p>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          {turkish ? 'İlerleme ve hesap kurtarma' : 'Progress and account recovery'}
        </h2>
        <p>
          {turkish
            ? 'Çevrim dışı oynarken ilerleme ve gönderilmeyi bekleyen skorlar cihazda saklanır; bağlantı geldiğinde eşitlenir. Profilinizi e-posta adresinize bağladıysanız yeni cihazda hesap kurtarma bağlantısı isteyebilirsiniz. Yalnızca misafir olarak kullanılan ve hiçbir hesaba bağlanmayan profil, cihaz kaybolursa kurtarılamayabilir.'
            : 'Offline progress and pending scores are stored on your device and sync when the service becomes available. If you linked your profile to an email address, request an account recovery link on a new device. A guest profile that was never linked to an account may not be recoverable after the device is lost.'}
        </p>
      </section>
      <p>
        {turkish ? 'E-posta: ' : 'Email: '}
        <a className="underline" href={`mailto:${sharedMetadata.email}`}>
          {sharedMetadata.email}
        </a>
      </p>
      <p>
        <a className="underline" href={`/docs/app-policy?lang=${turkish ? 'tr' : 'en'}`}>
          {turkish ? 'Gizlilik politikası' : 'Privacy policy'}
        </a>
      </p>
    </main>
  );
}
