import { title } from "process"
import { CvEntry } from "../component/CVEntry"
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";



export function Card({ props }: { props: string } ) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-sm">
      <h1 className="text-xl font-bold text-gray-800 ">{props}</h1>
    </div>
  )
}


export default function MyFirstPage() {
    return (
        <div className="max-w-3xl mx-auto p-8">    
          
          {/* Titre principal de la page */}
          <h1 className="text-3xl font-extrabold text-blue-950 mb-8 text-center border-b-2 border-gray-200 pb-4">
            Expériences Professionnelles
          </h1>

          {/* Conteneur des expériences avec un espacement régulier (space-y-6) */}
          <div className="space-y-6">
            <CvEntry 
              title="Vendeur - Jack & Jones (Anderlecht)" 
              date="Mai 2025 - Août 2026" 
              description="Accueil et accompagnement du client, mise en rayon, réception des livraisons, gestion des stocks et encaissement." 
            />

            <CvEntry 
              title="Serveur - Café La Renaissance (Saint-Gilles)" 
              date="Juillet - Août 2024" 
              description="Accueil, prise des commandes, service en salle, préparation de boissons au bar et encaissement en fin de service." 
            />

            <CvEntry 
              title="Mise en rayon - Carrefour Marius Renard (Anderlecht)" 
              date="Juillet - Août 2023" 
              description="Réception des stocks, mise en rayon, gestion des marchandises, rotation des produits et relation client." 
            />
          </div>
          
        </div>
    )
}