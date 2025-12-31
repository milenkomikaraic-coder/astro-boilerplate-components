import type { ReactNode } from 'react';

type INewsletterProps = {
  title: ReactNode;
  description: ReactNode;
};

const Newsletter = (props: INewsletterProps) => (
  <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
    <div className="sm:w-7/12">
      <div className="text-3xl font-bold">{props.title}</div>
      <p className="mt-3 text-gray-300">{props.description}</p>
    </div>

    <div className="w-full sm:w-5/12">
      <form
        className="flex rounded-full bg-slate-800 px-4 py-2
                   focus-within:ring-2 focus-within:ring-cyan-600
                   hover:ring-2 hover:ring-cyan-600"
      >
        {/* Accessible label (screen-reader only) */}
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>

        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="Your email"
          className="w-full appearance-none bg-slate-800
                     focus:outline-none text-white placeholder-gray-400"
        />

        <button
          type="submit"
          className="ml-2 shrink-0 rounded-full
                     bg-gradient-to-br from-sky-500 to-cyan-400
                     px-3 py-1 text-sm font-medium
                     hover:from-sky-700 hover:to-cyan-600
                     focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

export { Newsletter };
