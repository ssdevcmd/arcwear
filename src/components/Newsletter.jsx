import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-10 text-center">

        <h2 className="text-3xl font-black">
          NEVER MISS A DROP.
        </h2>

        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Join our community for exclusive releases and early access to upcoming collections.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 w-full sm:w-80 focus:outline-none focus:border-emerald-500"
          />

          <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
            Join
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;