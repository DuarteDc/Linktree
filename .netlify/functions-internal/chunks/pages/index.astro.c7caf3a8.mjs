/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, F as Fragment, u as unescapeHTML } from '../astro.56b6d10d.mjs';
import contentful from 'contentful';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const $$Astro$e = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/layouts/Layout.astro", void 0);

const $$Astro$d = createAstro();
const $$FacebookIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$FacebookIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/FacebookIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$GithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github-filled" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="white"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/GithubIcon.astro", void 0);

const $$Astro$b = createAstro();
const $$InstagramIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
  <path d="M16.5 7.5l0 .01"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/InstagramIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
  <path d="M8 11l0 5"></path>
  <path d="M8 8l0 .01"></path>
  <path d="M12 16l0 -5"></path>
  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/LinkedIn.astro", void 0);

const $$Astro$9 = createAstro();
const $$SporifyIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SporifyIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-spotify" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
  <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"></path>
  <path d="M9 15c1.5 -1 4 -1 5 .5"></path>
  <path d="M7 9c2 -1 6 -2 10 .5"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/SporifyIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$WhatsAppIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$WhatsAppIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/WhatsAppIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$EmailIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$EmailIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
  <path d="M3 7l9 6l9 -6"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/EmailIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$TikTokIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TikTokIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/TikTokIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$DownloadIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DownloadIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
  <path d="M7 11l5 5l5 -5"></path>
  <path d="M12 4l0 12"></path>
</svg>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/DownloadIcon.astro", void 0);

const Icons = {
    FacebookIcon: $$FacebookIcon,
    GithubIcon: $$GithubIcon,
    InstagramIcon: $$InstagramIcon,
    LinkedIn: $$LinkedIn,
    SporifyIcon: $$SporifyIcon,
    WhatsAppIcon: $$WhatsAppIcon,
    EmailIcon: $$EmailIcon,
    TikTokIcon: $$TikTokIcon,
    DownloadIcon: $$DownloadIcon
};

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { user } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="grid grid-cols-1 md:grid-cols-2 mt-20 lg:mt-40 container mx-4 lg:mx-auto text-white place-items-center">
  <picture class="rounded-full overflow-hidden mx-auto w-[12rem] h-[12rem] md:w-[18rem] md:h-[18rem] lg:w-[25rem] lg:h-[25rem] bg-gray-700">
    <img${addAttribute("https:" + user.imageProfile.fields.file.url, "src")} class="w-full h-full object-cover object-center" alt="Eduardo Duarte">
  </picture>
  <div class="mt-10 md:mt-20">
    <span class="text-4xl lg:text-8xl font-extrabold text-center lg:text-start">
      <h1 class="text-emerald-600">${user.name}</h1>
      <h2>${user.lastName}</h2>
    </span>
    <hr class="hidden md:block md:w-3/12 border-emerald-600 border-4 my-5">
    <p class="mt-10 md:text-lg lg:text-2xl">
      ${user.description}
    </p>
    <a${addAttribute(`https:` + user.resume.fields.file.url, "href")} download type="button" class="bg-emerald-600 px-5 lg:px-10 py-3 rounded-full my-5 font-bold border border-emerald-600 hover:bg-transparent transition-all duration-500 ease-out flex md:text-lg items-center mt-10 w-32 md:w-36 lg:w-48">
      ${renderComponent($$result, "Icons.DownloadIcon", Icons.DownloadIcon, {})}
      <p class="px-1 lg:px-2">Resume</p>
    </a>
  </div>
</header>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/home/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$SocialMediaIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialMediaIcon;
  const { title, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" class="rounded-3xl hover:bg-transparent border border-emerald-800 bg-emerald-800 w-32 text-white flex flex-col items-center py-5 cursor-pointer transition-all ease-linear duration-500">
  ${renderSlot($$result, $$slots["default"])}
  <p class="font-extrabold">${title}</p>
</a>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/SocialMediaIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinksItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinksItem;
  const { title, links, icon } = Astro2.props;
  await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "SocialMediaIcon", $$SocialMediaIcon, { "title": title, "link": links }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon)}` })}
` })}`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/home/LinksItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$LinkSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkSection;
  const { title, dataLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-20 lg:max-w-[1200px] lg:mx-auto mx-5">
  <h3 class="text-white font-extrabold text-4xl mb-12">${title}</h3>
  <div class="flex flex-wrap justify-center lg:justify-start gap-10 mx-2 lg:mx-40">
    ${dataLinks.items.map(({ fields }) => renderTemplate`${renderComponent($$result, "LinksItem", $$LinksItem, { "title": fields.title, "links": fields.link, "icon": fields.icon })}`)}
  </div>
</section>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/home/LinkSection.astro", void 0);

var ContentTypes = /* @__PURE__ */ ((ContentTypes2) => {
  ContentTypes2["PersonalLinks"] = "personalLinks";
  ContentTypes2["ProfesionalLinks"] = "profesionalLinks";
  ContentTypes2["User"] = "user";
  return ContentTypes2;
})(ContentTypes || {});
const contentfulClient = contentful.createClient({
  space: "ur4rinp0exxd",
  accessToken: "QHr2V-ZnJ8NaBOOSW-yWbuy9ST7n58B57r1P1vNL-hE",
  host: "cdn.contentful.com"
});

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const personalLinks = await contentfulClient.getEntries({
    content_type: ContentTypes.PersonalLinks,
    order: ["sys.createdAt"]
  });
  const profesionalLinks = await contentfulClient.getEntries({
    content_type: ContentTypes.ProfesionalLinks,
    order: ["sys.createdAt"]
  });
  const user = await contentfulClient.getEntries({
    content_type: ContentTypes.User
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eduardo Duarte" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="container mx-auto text-white">
    ${renderComponent($$result2, "Header", $$Header, { "user": user.items[0].fields })}
      ${renderComponent($$result2, "LinkSection", $$LinkSection, { "title": "Personal Links", "dataLinks": personalLinks })}
    ${renderComponent($$result2, "LinkSection", $$LinkSection, { "title": "Profesional Links", "dataLinks": profesionalLinks })}
  </main>
` })}`;
}, "/home/duartebv/Documentos/Astro/linktree/src/pages/index.astro", void 0);

const $$file = "/home/duartebv/Documentos/Astro/linktree/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
