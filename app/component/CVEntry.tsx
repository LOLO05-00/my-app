export function CvEntry({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    // 1. Conteneur pleine largeur (w-full), avec une bordure épaisse à gauche (border-l-4)
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-blue-950 w-full hover:shadow-md transition-shadow">
      {/* 2. Flexbox pour aligner le Titre à gauche et la Date à droite */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>

        {/* 3. La date transformée en "Badge" stylisé */}
        <span className="mt-2 sm:mt-0 text-sm font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
          {date}
        </span>
      </div>

      {/* 4. La description en dessous, aérée */}
      <p className="text-gray-600 leading-relaxed text-justify">
        {description}
      </p>
    </div>
  );
}
