const features = [
  {
    title: "Multi-Format Support",
    desc: "Open CSV, Excel, JSON, and Parquet files. Free plan supports files up to 8 MB. Pro plan has no size limit.",
  },
  {
    title: "30+ Clean Operations",
    desc: "Fill nulls, deduplicate, type-cast, normalize, encode labels, regex replace, derive columns and much more.",
  },
  {
    title: "Filter & Sort Engine",
    desc: "High-performance filtering across millions of rows — by value, regex, date range, null state, and more.",
  },
  {
    title: "Visual Analytics",
    desc: "Generate charts and statistical distributions to spot trends and anomalies instantly. Pro feature.",
  },
  {
    title: "Advanced Analytics",
    desc: "Deeper statistical profiling, correlation matrices, and outlier detection — available on Pro plan.",
  },
  {
    title: "Parquet & Excel Export",
    desc: "Export cleaned datasets to optimized Parquet or standard Excel formats. Requires Pro plan.",
  },
  {
    title: "No-Code Interface",
    desc: "Build complex data transformations through a visual interface. No Python or SQL knowledge required.",
  },
  {
    title: "Secure by Design",
    desc: "Your data files are processed 100% locally — they never leave your machine. Accounts use encrypted cloud auth.",
  },
];

const Features = () => (
  <section id="features" className="py-24 px-[5%]">
    <h2 className="reveal font-display text-4xl">Core Capabilities</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      {features.map((f, i) => (
        <div
          key={i}
          className="feature-card reveal bg-card border border-border p-10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1.5 hover:border-accent-muted"
        >
          <span className="font-mono text-primary mb-4 block text-sm">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-3xl mb-4">{f.title}</h3>
          <p className="text-muted-foreground text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
