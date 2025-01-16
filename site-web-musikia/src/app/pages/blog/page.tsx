"use client";

import '../../globals.css';
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

interface BlogPostType {
  title: string;
  description: string;
  meta_description: string;
  author: string;
  date: string;
  images: string[];
  alt_tags: string[];
  content: string;
  external_links: string[];
  internal_links: string[];
  slug: string;
}

const blogPosts: BlogPostType[] = [
  {
    title: "L'IA dans la production musicale",
    description: "Utilisation et développement de l'IA dans le domaine de la musique",
    meta_description: "Découvrez comment l'intelligence artificielle transforme la production musicale tout en présentant ses défis.",
    author: "Jean Michel Blogueur",
    date: "2025-01-03",
    images: [
      "/images/blog/post1-image1.jpeg",
      "/images/blog/post1-image2.jpeg",
      "/images/blog/post1-image3.jpeg"
    ],
    alt_tags: ["IA dans la musique", "Création musicale avec IA", "Production musicale IA"],
    content: `L'intelligence artificielle (IA) transforme profondément l'industrie musicale, offrant de nouvelles possibilités créatives et techniques aux artistes et producteurs. De la composition à la production en passant par le mixage, l'IA s'impose comme un outil incontournable dans le processus de création musicale.
    `,
    external_links: ["https://example.com/impact-ia-musique"],
    internal_links: ["/historique-ia-musique", "/musique-2025"],
    slug: "ia-dans-la-musique"
  }
];

const BlogPage = () => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <section className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-[var(--h1-color)] text-4xl font-bold mb-4 text-center">Notre Blog</h1>
          <p className="text-[var(--p-color)] text-xl mb-12 text-center">N&apos;hésitez pas à suivre notre actualité !</p>
          {selectedSlug === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl flex flex-col h-full">
                  <Image src={post.images[0]} alt={post.alt_tags[0]} width={400} height={250} className="w-full h-48 object-cover" />
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-[var(--h2-color)] text-xl font-semibold mb-3">{post.title}</h2>
                    <p className="text-[var(--p-color)] mb-4 line-clamp-3 flex-grow">{post.description}</p>
                    <div className="mt-auto">
                      <button onClick={() => setSelectedSlug(post.slug)} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full">Lire la suite</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            blogPosts.filter(post => post.slug === selectedSlug).map(post => (
              <div key={post.slug} className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  {post.images.map((img, idx) => (
                    <Image key={idx} src={img} alt={post.alt_tags[idx] || `Image ${idx + 1}`} width={600} height={400} className="w-full h-auto object-cover rounded-lg" />
                  ))}
                </div>
                <h2 className="text-[var(--h2-color)] text-4xl font-bold mb-4 text-center">{post.title}</h2>
                <p className="text-[var(--p-color)] mb-4 text-center">{post.description}</p>
                <div className="text-gray-800 mb-6">{post.content}</div>
                <div className="flex justify-between items-center mt-auto">
                  <p className="text-[var(--p-color)] font-medium">{post.author}</p>
                  <time dateTime={post.date} className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <button onClick={() => setSelectedSlug(null)} className="bg-red-600 hover:bg-red-700 text-[var(--btn-text)] mt-4 px-4 py-2 rounded transition">Fermer</button>
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