interface Props {
  eyebrow: string;
  title: string;
  titleAccent?: string;
}

export default function SectionHeader({ eyebrow, title, titleAccent }: Props) {
  return (
    <div className="mb-10">
      <p
        className="font-mono text-xs uppercase tracking-widest mb-3"
        style={{ color: 'var(--text-muted)' }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-display text-2xl mb-6 tracking-wide"
        style={{ color: 'var(--text)' }}
      >
        {title}
        {titleAccent && (
          <span className="text-blue"> {titleAccent}</span>
        )}
      </h2>
      <div style={{ height: '1px', background: 'var(--border)' }} />
    </div>
  );
}
