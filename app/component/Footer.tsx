export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8 mt-auto">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col gap-2">
        {/* Tes coordonnées tirées de ton CV */}
        <div className="text-sm text-gray-300 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span>📍 1070 Anderlecht</span>
          <span className="hidden sm:inline">|</span>
          <span>📞 0483 043 965</span>
          <span className="hidden sm:inline">|</span>
          <span>✉️ binadambln9@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
