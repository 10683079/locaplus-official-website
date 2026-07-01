import Image from "next/image";

const navItems = [
  { label: "品牌理念", href: "#brand" },
  { label: "服务内容", href: "#services" },
  { label: "合作伙伴", href: "#partners" },
  { label: "联系我们", href: "#contact" },
];

const services = [
  {
    title: "社区轻出行",
    english: "Local Mobility",
    description: "围绕居民短途出行、周边游与社区活动集合，提供更轻便的生活半径连接。",
  },
  {
    title: "公益活动",
    english: "Public Good",
    description: "协同街道、基金会与公益组织，推动可持续、可参与、可复用的社区公益项目。",
  },
  {
    title: "邻里互助",
    english: "Neighbor Support",
    description: "把居民、志愿者与服务资源组织起来，让社区内的帮助更容易被看见和抵达。",
  },
  {
    title: "宠物友好服务",
    english: "Pet Friendly",
    description: "连接宠物友好商户、活动与服务设施，提升社区公共空间的包容度与亲和力。",
  },
  {
    title: "社区品牌合作",
    english: "Brand Partnership",
    description: "帮助品牌进入真实社区场景，以可信赖的方式完成触达、服务与长期运营。",
  },
];

const partnerTypes = ["社区", "街道", "基金会", "品牌方", "服务商"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[#f7f4ee]/86 backdrop-blur-xl">
        <nav className="section-shell flex h-18 items-center justify-between gap-6">
          <a href="#" className="flex items-baseline gap-2" aria-label="LOCA+ home">
            <span className="text-xl font-semibold tracking-[0.04em]">LOCA+</span>
            <span className="hidden text-sm text-[var(--muted)] sm:inline">益邻家</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[var(--foreground)]">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            联系我们
          </a>
        </nav>
      </header>

      <section className="soft-grid relative flex min-h-[92svh] items-center pt-28">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
        <div className="section-shell relative grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[var(--brand)]">
              Community Life Plus
            </p>
            <h1 className="text-[clamp(4rem,15vw,10rem)] font-semibold leading-[0.86] tracking-normal">
              LOCA+
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(1.9rem,5vw,4.8rem)] font-medium leading-[1.05] tracking-normal">
              让更好的社区生活，
              <br />
              就在家门口发生
            </p>
            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              益邻家旗下社区生活服务品牌，连接居民日常场景与可信赖服务，让社区成为更便利、更温暖、更有连接感的生活入口。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#partners"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--foreground)] px-7 text-sm font-semibold text-white transition hover:bg-[var(--brand)]"
              >
                了解合作
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line)] px-7 text-sm font-semibold transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                联系我们
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[620px]">
            <div className="absolute inset-0 rounded-[48px] border border-[var(--line)] bg-[#fbfaf6]/62 shadow-[0_32px_90px_rgba(29,36,33,0.08)]" />
            <Image
              src="/loca-community.svg"
              alt="LOCA+ community connection visual"
              fill
              priority
              className="object-contain p-8 sm:p-12"
            />
          </div>
        </div>
      </section>

      <section id="brand" className="py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--warm)]">Brand Belief</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl">品牌理念</h2>
          </div>
          <div className="border-l border-[var(--line)] pl-8 text-2xl leading-[1.55] tracking-normal text-[var(--foreground)] max-sm:border-l-0 max-sm:pl-0 max-sm:text-xl">
            LOCA+ 是益邻家旗下社区生活服务品牌，围绕社区居民日常生活场景，连接出行、公益、邻里互助、宠物友好、品牌服务等内容，打造更便利、更温暖、更有连接的社区生活体验。
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[var(--line)] bg-[#fcfbf7] py-24 sm:py-32">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--brand)]">What We Connect</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-5xl">服务内容</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              从居民真实需求出发，形成可运营的社区服务模块，并支持不同合作方按场景组合落地。
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <article key={service.title} className="bg-[#fcfbf7] p-7 sm:p-8">
                <div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-soft)] text-sm font-semibold text-[var(--brand)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--warm)]">
                  {service.english}
                </p>
                <h3 className="text-xl font-semibold tracking-normal">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--warm)]">Partner Value</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">
              为社区生态提供可落地、可运营、可持续的服务方案
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              面向社区、街道、基金会、品牌方和服务商，LOCA+ 将居民需求、公共议题与商业服务转化为长期可执行的社区生活项目。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {partnerTypes.map((type) => (
              <div
                key={type}
                className="flex min-h-28 items-end rounded-3xl border border-[var(--line)] bg-[#fbfaf6] p-6 text-xl font-semibold shadow-[0_20px_60px_rgba(29,36,33,0.05)]"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--foreground)] py-20 text-white sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--gold)]">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal sm:text-6xl">联系我们</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/68">
              欢迎社区、街道、基金会、品牌方和服务商与 LOCA+ 探索社区生活服务合作。
            </p>
          </div>
          <div className="grid gap-4 text-base sm:grid-cols-3">
            <div className="border-t border-white/16 pt-5">
              <p className="mb-2 text-sm text-white/48">公司名称</p>
              <p className="font-medium">上海益邻家商业管理有限公司</p>
            </div>
            <div className="border-t border-white/16 pt-5">
              <p className="mb-2 text-sm text-white/48">品牌</p>
              <p className="font-medium">LOCA+ / 益邻家</p>
            </div>
            <div className="border-t border-white/16 pt-5">
              <p className="mb-2 text-sm text-white/48">域名</p>
              <p className="font-medium">locaplus.cn</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
