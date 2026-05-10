import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="px-14 py-12 flex justify-center"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* SVG has fill="black"; dark:invert flips it to white on dark backgrounds */}
      <Image
        src="/assets/Signature.svg"
        alt="Designer signature"
        width={123}
        height={25}
        style={{ opacity: 0.35 }}
        className="dark:invert"
      />
    </footer>
  );
}
