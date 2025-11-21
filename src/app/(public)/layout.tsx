export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Header public - à personnaliser plus tard */}
      <main>{children}</main>
    </div>
  );
}
