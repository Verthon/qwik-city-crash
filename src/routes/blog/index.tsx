import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Blog</h1>
      <Link href="/">
        back to home
      </Link>

      <h2>Articles</h2>
      <Link href="/blog/qwik-basics">
        go to qwik basics
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'Blog sub page',
    },
  ],
};