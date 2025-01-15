import FileUpload from "./components/FileUpload";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import './globals.css'

export default function Home() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-16">
          <div className="mx-auto max-w-4xl lg:text-center">
            <h2 className="text-base font-semibold text-[var(--h2-color)]">Conversion intelligente</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-[var(--p-color)] sm:text-5xl">Transformez vos fichiers MP3 en partitions</p>
            <p className="mt-6 text-lg lg:text-xl text-[var(--p-color)]">Musikia utilise l&apos;intelligence artificielle pour convertir vos fichiers audio en partitions musicales précises et détaillées.</p>
          </div>
          <FileUpload />
          <div className="mx-auto mt-16 max-w-full sm:mt-20 lg:mt-24 lg:max-w-6xl">
            <dl className="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16 group">
                <dt className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                  </div>
                  <span className="group-hover:text-indigo-700 transition-colors">Téléchargement facile</span>
                </dt>
                <dd className="text-base lg:text-xl text-gray-600 leading-relaxed">
                  Importez simplement vos fichiers MP3 et laissez Musikia transformer votre expérience musicale en quelques clics.
                </dd>
              </div>
              <div className="relative pl-16 group">
                <dt className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="group-hover:text-indigo-700 transition-colors">Résultats rapides</span>
                </dt>
                <dd className="text-base lg:text-xl text-gray-600 leading-relaxed">
                  Obtenez des partitions précises et détaillées en quelques minutes grâce à notre intelligence artificielle avancée.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}

