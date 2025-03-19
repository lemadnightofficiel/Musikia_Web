import { Download, Zap, CheckCircle } from "lucide-react";
import './globals.css'
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/NavBar";

export default function Home() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-16">
          <div className="mx-auto max-w-4xl lg:text-center">
            <p className="mt-2 text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl">
              Transformez vos fichiers MP3 en partitions précises et détaillées
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-16">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">Musikia : késaco ?</h2>
              <p className="text-lg text-gray-600">Découvrez Musikia, l&apos;outil révolutionnaire de transformation musicale basé sur l&apos;intelligence artificielle. Que vous soyez musicien, professeur ou passionné, Musikia vous permet de convertir facilement vos fichiers audio en partitions précises. Fini les heures passées à transcrire manuellement : avec une précision exceptionnelle, notre technologie analyse vos mélodies pour les transformer en partitions claires et à vous de jouer !</p>
              <p className="text-lg text-gray-600">Ne perdez plus de temps, concentrez-vous sur l&apos;essentiel : la musique. Essayez Musikia dès aujourd'hui et révolutionnez votre manière de jouer, d&apos;enseigner et de composer !</p>
              <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all">
                Essayez maintenant
              </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img src="/images/intro/image_intro_1.png" alt="Illustration de conversion musicale" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
          <div className="mt-24">
            <h2 className="text-3xl font-semibold text-gray-800 text-center">Nos avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: <Download className="h-10 w-10 text-white" />, title: "Téléchargement facile", text: "Grâce à son intelligence artificielle avancée, Musikia transforme vos fichiers de manière accessible, vous permettant de gagner un temps précieux.", text2: "Dégagez du temps et concentrez-vous sur l'essentiel : jouer, enseigner et créer !" },
                { icon: <Zap className="h-10 w-10 text-white" />, title: "Résultats rapides", text: "Musikia traite vos fichiers en quelques secondes et vous obtenez instantanément votre partition. Plus besoin d'attendre, votre temps est précieux. Soyez efficace !", text2: "Que vous soyez en répétition ou en cours, accédez à vos transcriptions en quelques secondes." },
                { icon: <CheckCircle className="h-10 w-10 text-white" />, title: "Précision optimale", text: "Notre technologie d'intelligence artificielle avancée capture chaque note avec une fidélité exceptionnelle, évitant les erreurs courantes des transcriptions manuelles.", text2: "Profitez de partitions fidèles et prêtes à l'emploi, sans compromis sur la qualité !" }
              ].map((item, index) => (
                <div key={index} className="relative pl-16 group bg-white p-6 rounded-xl shadow-lg">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-2">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.text}</p>
                  <p className="text-base text-gray-600">{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-24">
            <div className="lg:w-1/2">
              <img src="/images/intro/image_intro_2.png" alt="Illustration de partition musicale" className="w-full rounded-xl shadow-lg" />
            </div>
            <div className="lg:w-1/2 space-y-4 lg:pl-12 mt-8 lg:mt-0">
              <h2 className="text-3xl font-semibold text-gray-800">Pour qui est fait Musikia ?</h2>
              <p className="text-lg text-gray-600">Que vous soyez musicien, professeur, étudiant ou compositeur, Musikia s&apos;adapte à vos besoins et simplifie votre quotidien :</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Professeurs de musique : </strong>Gagnez un temps précieux en transcrivant instantanément les morceaux pour vos élèves et personnalisez facilement vos supports pédagogiques.</li>
                <li><strong>Musiciens amateurs : </strong>Développez vos compétences sans effort et progressez plus rapidement grâce à des partitions claires et précises.</li>
                <li><strong>Compositeurs : </strong>Transformez vos idées musicales en partitions exploitables en quelques secondes, pour ne jamais perdre l&apos;inspiration.</li>
              </ul>
              <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all">
                Essayez maintenant
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-16">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">Comment ça marche ?</h2>
              <p className="text-lg text-gray-600">Notre IA se découpe en 4 parties :</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>IA reconnaît la musique que vous souhaitez transcrire</li>
                <li>La musique est découpée en différentes pistes audio. Une piste audio est générée par instrument</li>
                <li>Grâce à son immense base de données, l&apos;IA repère chaque changement de son et lui attribue une note/accord</li>
                <li>L&apos;IA écrit ses résultats sous forme de partition. Une partition est générée pour chaque instrument présent dans la musique</li>
              </ol>
              <p className="text-lg text-gray-600">Si vous souhaitez en savoir plus, vous pouvez consulter nos articles sur le fonctionnement de Musikia.</p>
              <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all">
                NaN
              </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img src="/images/intro/image_intro_3.png" alt="Illustration de conversion musicale" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
