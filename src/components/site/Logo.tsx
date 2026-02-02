export function Logo() {
  return (
    <a href="/" className="inline-flex items-center">
      {/* Using <img> for static export simplicity */}
      <img
        src="/logo.png"
        alt="Dellcreek Developers Limited"
        className="h-9 w-auto"
      />
    </a>
  );
}

