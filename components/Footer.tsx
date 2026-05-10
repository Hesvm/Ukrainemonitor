import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="px-14 py-10 flex items-center justify-between"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <p
        className="font-mono text-[10px] uppercase tracking-widest"
        style={{ color: 'var(--text-muted)' }}
      >
        Ukraine Monitor · Brand Identity System · 2025
      </p>

      <Image
        src="/assets/Signature.svg"
        alt="Designer signature"
        width={148}
        height={25}
        style={{ opacity: 0.45 }}
        className="dark:invert"
      />
    </footer>
  );
}
