"use client";
import React from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

const blogPosts = [
  { id: 1, title: "Article 1", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ipsum eget urna lacinia aliquam sit amet non purus. Etiam porta ipsum ac semper malesuada. Donec gravida ullamcorper tellus in dignissim. Ut ut dui non sapien ultricies varius. Duis mi ante, porttitor ac mattis eu, suscipit eu tortor. Sed mollis mi massa, vel malesuada magna feugiat sed. Sed efficitur dapibus feugiat. Mauris sit amet quam in ante interdum egestas a vitae dui. Proin vestibulum magna vitae mi sagittis iaculis. Phasellus hendrerit, urna id ultrices semper, ligula metus convallis nibh, ac mattis orci nisi sit amet metus. Cras dolor felis, cursus ac ex id, pharetra venenatis mauris. Integer commodo elit ac porttitor cursus. Mauris ac euismod metus. Proin semper id ante quis pulvinar. Donec dictum odio vitae ipsum commodo, et tempor ligula eleifend. Aenean a dignissim ipsum." },
  { id: 2, title: "Article 2", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ipsum eget urna lacinia aliquam sit amet non purus. Etiam porta ipsum ac semper malesuada. Donec gravida ullamcorper tellus in dignissim. Ut ut dui non sapien ultricies varius. Duis mi ante, porttitor ac mattis eu, suscipit eu tortor. Sed mollis mi massa, vel malesuada magna feugiat sed. Sed efficitur dapibus feugiat. Mauris sit amet quam in ante interdum egestas a vitae dui. Proin vestibulum magna vitae mi sagittis iaculis. Phasellus hendrerit, urna id ultrices semper, ligula metus convallis nibh, ac mattis orci nisi sit amet metus. Cras dolor felis, cursus ac ex id, pharetra venenatis mauris. Integer commodo elit ac porttitor cursus. Mauris ac euismod metus. Proin semper id ante quis pulvinar. Donec dictum odio vitae ipsum commodo, et tempor ligula eleifend. Aenean a dignissim ipsum." },
  { id: 3, title: "Article 3", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non ipsum eget urna lacinia aliquam sit amet non purus. Etiam porta ipsum ac semper malesuada. Donec gravida ullamcorper tellus in dignissim. Ut ut dui non sapien ultricies varius. Duis mi ante, porttitor ac mattis eu, suscipit eu tortor. Sed mollis mi massa, vel malesuada magna feugiat sed. Sed efficitur dapibus feugiat. Mauris sit amet quam in ante interdum egestas a vitae dui. Proin vestibulum magna vitae mi sagittis iaculis. Phasellus hendrerit, urna id ultrices semper, ligula metus convallis nibh, ac mattis orci nisi sit amet metus. Cras dolor felis, cursus ac ex id, pharetra venenatis mauris. Integer commodo elit ac porttitor cursus. Mauris ac euismod metus. Proin semper id ante quis pulvinar. Donec dictum odio vitae ipsum commodo, et tempor ligula eleifend. Aenean a dignissim ipsum." },
];

const BlogPage = () => {
  return (
    <section>
    <NavBar></NavBar>
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
      <p className="text-lg text-center mb-4">Bienvenue sur notre blog ! Découvrez nos derniers articles ci-dessous :</p>
      <section>
        {blogPosts.map(post => (
          <article key={post.id} className="mb-6 p-4 border rounded shadow">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
    </section>
  );
};

export default BlogPage;