import { Flame, Shirt, Sparkles } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Flame,
      title: "Limited Drops",
      desc: "Exclusive collections released in limited quantities.",
    },
    {
      icon: Shirt,
      title: "Oversized Fit",
      desc: "Premium heavyweight streetwear inspired by anime culture.",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      desc: "Soft cotton feel with bold graphic artwork.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition"
          >
            <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}