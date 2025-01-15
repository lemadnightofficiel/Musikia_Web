"use client";

import '../../globals.css'
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

interface BlogPostType {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: "L'IA dans la production musicale",
    description: "Utilisation et développement de l'IA dans le domaine de la musique",
    author: "Jean Michel Blogueur",
    date: "2025-01-03",
    image: "/images/blog/post1.jpeg",
    content: `L'intelligence artificielle (IA) transforme profondément l'industrie musicale, offrant de nouvelles possibilités créatives et techniques aux artistes et producteurs. De la composition à la production en passant par le mixage, l'IA s'impose comme un outil incontournable dans le processus de création musicale.
Composition assistée par IA
Les outils d'IA générative comme AIVA, Boomy ou MuseNet permettent désormais de créer des compositions originales dans une multitude de styles musicaux. Ces logiciels analysent des milliers de morceaux pour en extraire les éléments constitutifs et proposer de nouvelles mélodies, harmonies et rythmes. Ils offrent aux musiciens une source d'inspiration inépuisable et la possibilité d'explorer rapidement de nouvelles idées créatives.
Des artistes renommés comme Jean-Michel Jarre ont déjà intégré l'IA dans leur processus créatif. Le pionnier de la musique électronique a notamment utilisé ces technologies pour son album 'Oxymore' sorti en 2022.
Production et mixage optimisés
Au-delà de la composition, l'IA révolutionne également les étapes de production et de mixage :
Des logiciels comme iZotope Neutron utilisent des algorithmes avancés pour analyser les pistes audio et suggérer des ajustements de mixage.
LANDR propose un mastering automatisé de qualité professionnelle.
Ozone détecte les problèmes de mixage et recommande des corrections pour améliorer la qualité sonore.
Ces outils permettent aux producteurs de gagner un temps précieux sur les aspects techniques, leur laissant plus de liberté pour se concentrer sur la créativité.
Génération de contenus musicaux
L'IA ouvre également de nouvelles possibilités en matière de génération de contenus musicaux :
Création de voix artificielles à partir de texte (Murf AI)
Génération de beats et d'instrumentaux complets (MusicLM de Google)
Imitation du style d'artistes célèbres
Ces technologies permettent de produire rapidement du contenu musical pour diverses applications : musique de fond pour vidéos, podcasts, jeux vidéo, etc.
Un marché en pleine expansion
Le marché de l'IA générative dans la musique devrait atteindre plus de 3 milliards de dollars d'ici 2028. Déjà, 35% des créateurs utilisent l'IA dans leur travail. Cette adoption croissante témoigne du potentiel transformateur de ces technologies pour l'industrie musicale.
L'IA s'impose comme un assistant précieux pour les musiciens et producteurs, offrant de nouvelles possibilités créatives tout en simplifiant les aspects techniques de la production musicale. Bien que suscitant des débats sur l'avenir de la créativité artistique, l'IA semble promise à un rôle grandissant dans l'industrie musicale des années à venir.`
  },
  {
    id: 2,
    title: "Tendances Musicales en 2025",
    description: "Tendances Musicales à Surveiller en 2025 !",
    author: "François du 44",
    date: "2025-01-01",
    image: "/images/blog/post2.jpeg",
    content: `L'année 2025 s'annonce riche en nouveautés et en évolutions dans le monde de la musique. Voici un aperçu des principales tendances qui devraient marquer cette année.
1. Musique Collaborative
Une des grandes tendances de 2025 sera la musique collaborative entre artistes de différents genres. Les groupes pop, par exemple, commenceront à collaborer avec des artistes de rap ou de musique électronique pour créer des mélanges uniques. Cette approche permettra d'apporter des interprétations live dynamiques lors d'événements. Des artistes comme Dua Lipa, avec son album Future Nostalgia, ont déjà ouvert la voie à ce mouvement.
2. Influence Croissante de la Musique Électronique
La musique électronique continuera d'influencer la pop en 2025, avec des groupes intégrant des éléments électroniques dans leurs performances. Les beats électroniques et les synthétiseurs modernes ajouteront une dimension supplémentaire aux concerts, incitant le public à danser. Des morceaux comme "Blinding Lights" de The Weeknd illustrent parfaitement cette fusion entre pop et musique électronique.
3. Durabilité et Écologie dans l'Industrie Musicale
Avec une prise de conscience croissante des enjeux environnementaux, de nombreux artistes et groupes adopteront des pratiques durables. Cela se traduira par des événements plus éco-responsables, où les performances et la production musicale refléteront cet engagement. Des artistes comme Billie Eilish, qui utilise sa plateforme pour sensibiliser à la durabilité, seront à l'avant-garde de ce mouvement.
4. Expériences Immersives et Interactions avec le Public
Les événements musicaux en 2025 mettront l'accent sur des performances immersives, où les artistes interagiront davantage avec le public. Cela inclura des performances participatives où les invités seront invités à chanter ou à danser. Des morceaux comme "Shut Up and Dance" de WALK THE MOON seront parfaits pour inciter les invités à participer activement.
5. Albums Attendus
2025 sera également marquée par le retour de plusieurs artistes emblématiques avec des albums très attendus :
The Weeknd : Hurry Up Tomorrow, prévu pour le 25 janvier.
Lady Gaga : LG7, attendu en février.
Damso : Beyah, annoncé pour mai.
Ces sorties promettent d'apporter une richesse musicale variée et excitante.
Conclusion
L'année 2025 s'annonce comme une période d'innovation et d'expérimentation dans l'industrie musicale. Avec l'émergence de nouvelles collaborations, l'influence croissante de la musique électronique, un engagement envers la durabilité, et des expériences immersives, les mélomanes peuvent s'attendre à une année riche en surprises et en découvertes musicales. Restez à l'écoute pour ne rien manquer des nouveautés qui façonneront le paysage musical de demain !`
  },
  {
    id: 3,
    title: "Fin de Shaka Ponk",
    description: "La Fin de Shaka Ponk : Un Adieu Écologique et Émotionnel en 2024",
    author: "John Doe",
    date: "2024-11-13",
    image: "/images/blog/post3.jpeg",
    content:`
Après plus de vingt ans de carrière, le groupe français Shaka Ponk a tiré sa révérence lors d'un ultime concert à l'Accor Arena de Paris, le 30 novembre 2024. Connus pour leur mélange explosif de rock, d'électro et de performances scéniques immersives, les membres du groupe ont décidé d'arrêter leurs tournées pour des raisons écologiques, en accord avec leurs convictions profondes.
Un Concert d'Adieu Chargé d'Émotions
Le dernier concert de Shaka Ponk a été un événement mémorable, attirant plus de 15 000 fans chaque soir. Les membres du groupe, dont Frah et Samaha Sam, ont partagé des moments intenses avec leur public, mêlant musique et messages engagés. Le concert a été l'occasion de revisiter leurs plus grands succès tels que "I'm Picky" et "My Name is Stain", tout en lançant des critiques acerbes contre la pollution et l'impact environnemental de l'industrie musicale.
Frah a déclaré : « Nous arrêtons pour de bonnes raisons. L'industrie musicale est devenue tellement polluante. » Cette décision a été accueillie avec une compréhension et un soutien chaleureux de la part des fans, qui ont applaudi leur engagement envers la planète.
Une Tournée d'Adieu : The Final Fcked Up Tour*
La tournée d'adieu, intitulée The Final Fcked Up Tour*, a été marquée par une série de concerts à guichets fermés dans toute la France. Le groupe a sillonné les routes avec une énergie contagieuse, rassemblant plus d'1,5 million de spectateurs au cours des dernières années. Leur dernier album éponyme, sorti en 2023, a également été présenté lors de ces concerts.
Pour ceux qui n'ont pas pu assister à cet ultime spectacle, le concert a été diffusé dans certains cinémas le 3 avril 2025, permettant aux fans de vivre cette expérience unique sur grand écran.
Un Héritage Musical Durable
Shaka Ponk laisse derrière lui un héritage musical riche et varié. Avec des albums emblématiques et des performances live inoubliables, ils ont su captiver un large public tout en abordant des thèmes sociaux et environnementaux. Leur style unique mélangeant rock alternatif, électro et influences diverses a inspiré de nombreux artistes.
Alors que le groupe se retire, ses membres ont exprimé leur désir de continuer à défendre les causes qui leur tiennent à cœur. Ils ont promis de revenir "dans une autre vie", laissant entendre que leur engagement pour la planète ne s'arrête pas avec la fin du groupe.
Conclusion
La fin de Shaka Ponk marque un tournant dans le paysage musical français. Leur décision d'arrêter les tournées pour des raisons écologiques résonne comme un appel à la responsabilité dans l'industrie musicale. En célébrant leur parcours avec passion et engagement, Shaka Ponk a prouvé qu'il est possible d'allier musique et conscience sociale. Les fans se souviendront longtemps de ces moments partagés avec un groupe qui a su faire vibrer les foules tout en restant fidèle à ses valeurs.`
  },
];

const BlogPage = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  return (
    <section className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-[var(--h1-color)] text-4xl font-bold mb-4 text-center">Notre Blog</h1>
          <p className="text-[var(--p-color)] text-xl mb-12 text-center">N&apos;hésitez pas à suivre notre actualité !</p>
          {selectedPostId === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl flex flex-col h-full">
                  <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-[var(--h2-color)] text-xl font-semibold mb-3">{post.title}</h2>
                    <p className="text-[var(--p-color)] mb-4 line-clamp-3 flex-grow">{post.description}</p>
                    <div className="mt-auto">
                      <button onClick={() => setSelectedPostId(post.id)} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full">Lire la suite</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : 
          (
            blogPosts.filter(post => post.id === selectedPostId).map(post => (
              <div key={post.id} className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
                <Image src={post.image} alt={post.title} width={600} height={300} className="w-full h-auto object-cover rounded-lg mb-4" />
                <h2 className="text-[var(--h2-color)] text-4xl font-bold mb-4 text-center">{post.title}</h2>
                <p className="text-[var(--p-color)] mb-4 text-center">{post.description}</p>
                <div className="text-gray-800 mb-6">{post.content}</div>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-[var(--p-color)] font-medium">{post.author}</p>
                  <time dateTime={post.date} className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <button onClick={() => setSelectedPostId(null)} className="bg-red-600 hover:bg-red-700 text-[var(--btn-text)]  mt-4 px-4 py-2 rounded transition">Fermer</button>
              </div>
            ))
          )}
        </section>
      </main>
      <Footer />
    </section>
  );
};

export default BlogPage;