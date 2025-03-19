import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import './globals.css'
import Image from 'next/image';

export default function Home() {
  return (
    <section className="min-h-screen bg-[var(--secondary-color)]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[var(--secondary-color)] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold text-[var(--h2-color)] mb-6">
            Transformez vos fichiers MP3 en partitions
          </h1>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Text */}
          <div className="pr-0 md:pr-8">
            <h2 className="text-xl font-bold mb-4">Musikia : késaco ?</h2>
            <p className="text-[var(--p-color)] mb-4">
              Découvrez Musikia, l'outil révolutionnaire de transformation musicale basé sur l'intelligence artificielle.
              Que vous soyez musicien, professeur ou passionné, Musikia vous permet de convertir facilement vos
              fichiers audio en partitions précises.
            </p>
            <p className="text-[var(--p-color)] mb-4">
              Fini les heures passées à transcrire manuellement : avec une 
              précision exceptionnelle, notre technologie analyse vos
              mélodies pour les transformer en partitions claires et à vous
              de jouer !
            </p>
            <p className="text-[var(--p-color)] mb-6">
              Ne perdez plus de temps, concentrez-vous sur
              l'essentiel : la musique. Essayez Musikia dès aujourd'hui
              et révolutionnez votre manière de jouer, d'enseigner et
              de composer !
            </p>
            <button className="btn-primary">
              Essayez maintenant
            </button>
          </div>
          
          {/* Right Column - Image */}
          <div className="bg-gray-300 h-64 md:h-auto flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold">Belle image d'une IA</p>
            </div>
          </div>
        </div>
        
        {/* Advantages Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-8 text-center">Nos avantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="feature-card pl-16">
              <div className="feature-icon">
                <span className="text-sm font-bold">icône</span>
              </div>
              <h3 className="text-lg font-bold mb-2 mt-2">Rapidité</h3>
              <p className="text-sm text-[var(--p-color)]">
                Grâce à son intelligence artificielle avancée, Musikia
                transforme vos fichiers de manière accessible, vous
                permettant de gagner un temps précieux.
              </p>
              <p className="text-sm text-[var(--p-color)] mt-4">
                Dégagez du temps et concentrez-vous sur l'essentiel :
                jouer, enseigner et créer !
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="feature-card pl-16">
              <div className="feature-icon">
                <span className="text-sm font-bold">icône</span>
              </div>
              <h3 className="text-lg font-bold mb-2 mt-2">Téléchargement rapide</h3>
              <p className="text-sm text-[var(--p-color)]">
                Avec Musikia, importez vos fichiers audio en un clic
                et obtenez instantanément votre partition. Plus
                besoin d'attendre, votre temps est précieux. Soyez
                efficace !
              </p>
              <p className="text-sm text-[var(--p-color)] mt-4">
                Que vous soyez en répétition ou en cours, accédez à
                vos transcriptions en quelques secondes.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="feature-card pl-16">
              <div className="feature-icon">
                <span className="text-sm font-bold">icône</span>
              </div>
              <h3 className="text-lg font-bold mb-2 mt-2">Précision optimale</h3>
              <p className="text-sm text-[var(--p-color)]">
                Grâce à une intelligence artificielle avancée, Musikia
                capture chaque note avec une fidélité exceptionnelle,
                évitant les erreurs courantes des transcriptions
                manuelles.
              </p>
              <p className="text-sm text-[var(--p-color)] mt-4">
                Profitez de partitions fidèles et prêtes à l'emploi, sans
                compromis sur la qualité !
              </p>
            </div>
          </div>
        </div>
        
        {/* For Who Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="bg-gray-300 h-64 md:h-auto flex items-center justify-center order-2 md:order-1">
              <div className="text-center">
                <p className="text-xl font-semibold">Belle image d'une IA</p>
              </div>
            </div>
            
            {/* Right Column - Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-xl font-bold mb-4">Pour qui est fait Musikia ?</h2>
              <p className="text-[var(--p-color)] mb-4">
                Que vous soyez musicien, professeur, étudiant ou
                compositeur, Musikia s'adapte à vos besoins et simplifie
                votre quotidien :
              </p>
              <ul className="list-disc pl-5 mb-6 text-[var(--p-color)]">
                <li className="mb-2">
                  <strong>Professeurs de musique :</strong> Gagnez un temps précieux
                  en transcrivant instantanément les morceaux pour
                  vos élèves et personnalisez facilement vos supports
                  pédagogiques.
                </li>
                <li className="mb-2">
                  <strong>Musiciens amateurs :</strong> Développez vos compétences
                  sans effort et progressez plus rapidement grâce
                  à des partitions claires et précises.
                </li>
                <li className="mb-2">
                  <strong>Compositeurs :</strong> Transformez vos idées musicales en partitions exploitables en quelques
                  secondes, pour ne jamais perdre l'inspiration.
                </li>
              </ul>
              <p className="text-[var(--p-color)] mb-6">
                Musikia est la solution pour tous : simple, rapide,
                fiable et accessible à tous !
              </p>
              <button className="btn-primary">
                Essayez maintenant
              </button>
            </div>
          </div>
        </div>
        
        {/* How it works Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-xl font-bold mb-4">Comment ça marche ?</h2>
              <p className="text-[var(--p-color)] mb-4">
                Rien n'a été développé en 4 parties :
              </p>
              <ol className="list-decimal pl-5 mb-6 text-[var(--p-color)]">
                <li className="mb-2">
                  <strong>1. IA reconnaît la musique que vous souhaitez</strong>
                </li>
                <li className="mb-2">
                  <strong>2. ÉCOUTER :</strong> notre détecteur va différencier chaque audio.
                </li>
                <li className="mb-2">
                  <strong>3. ANALYSER :</strong> nous analysons les notes, les rythmes, les nuances.
                </li>
                <li className="mb-2">
                  <strong>4. CRÉER :</strong> nos musiciens sous forme de partitions. Une
                  fois terminée, vous pouvez télécharger chaque instrument
                  présent dans la musique.
                </li>
              </ol>
              <p className="text-[var(--p-color)] mb-6">
                Si vous souhaitez en savoir plus, vous pouvez consulter
                nos articles détaillés dans notre blog.
              </p>
              <button className="btn-primary">
                Consulter les articles
              </button>
            </div>
            
            {/* Right Column - Image */}
            <div className="bg-gray-300 h-64 md:h-auto flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl font-semibold">Belle image d'une IA</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </section>
  );
}
