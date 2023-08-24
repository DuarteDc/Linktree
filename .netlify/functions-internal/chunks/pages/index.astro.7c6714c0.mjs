/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, u as unescapeHTML, m as maybeRenderHead, d as renderComponent, e as renderHead, f as renderSlot, F as Fragment } from '../astro.41e615c3.mjs';
import contentful from 'contentful';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$j = createAstro();
const $$GoogleAnalitycs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$GoogleAnalitycs;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Google tag (gtag.js) --><script async type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-7NDZHCW99V"><\/script>\n<script type="text/partytown">\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag() {\n  dataLayer.push(arguments);\n}\ngtag("js", new Date());\n\ngtag("config", "G-7NDZHCW99V");\n<\/script>'])));
}, "/home/duartebv/Documentos/Astro/linktree/src/components/layout/GoogleAnalitycs.astro", void 0);

const $$Astro$i = createAstro();
const $$Seo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Seo;
  const { description, image } = Astro2.props;
  return renderTemplate`<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta name="description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute("https:" + image, "content")}>
<meta property="og:url" content="https://duartebvdev.netlify.app/">
<link rel="canonical" href="https://duartebvdev.netlify.app/">`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/layout/Seo.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$h = createAstro();
const $$StructuredData = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$StructuredData;
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eduardo Duarte",
    "url": "https://duartebvdev.netlify.app/"
  }, void 0, 3);
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eduardo Duarte",
    "url": "https://duartebvdev.netlify.app/",
    "sameAs": [
      "https://github.com/DuarteDc",
      "https://www.linkedin.com/in/duartedc/",
      "https://www.facebook.com/eduardo.duarte.clemte",
      "https://www.instagram.com/duartebv17/"
    ],
    "image": "https://images.ctfassets.net/ur4rinp0exxd/5Vpll9FNbxvoCEVu7dBHLL/182bbf47eef41a95e776b5fe1d63f62c/Me.jpeg"
  });
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', '<\/script>\n\n<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schema), unescapeHTML(schemaData));
}, "/home/duartebv/Documentos/Astro/linktree/src/components/layout/StructuredData.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$g = createAstro();
const $$GoogleTagManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$GoogleTagManager;
  return renderTemplate(_a || (_a = __template(['<!-- Google Tag Manager --><script>\n  (function (w, d, s, l, i) {\n    w[l] = w[l] || [];\n    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n    var f = d.getElementsByTagName(s)[0],\n      j = d.createElement(s),\n      dl = l != "dataLayer" ? "&l=" + l : "";\n    j.async = true;\n    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n    f.parentNode.insertBefore(j, f);\n  })(window, document, "script", "dataLayer", "GTM-5NPDV6PW");\n<\/script>\n<!-- End Google Tag Manager -->'])));
}, "/home/duartebv/Documentos/Astro/linktree/src/components/layout/GoogleTagManager.astro", void 0);

const $$Astro$f = createAstro();
const $$NoScriptGTM = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$NoScriptGTM;
  return renderTemplate`<!-- Google Tag Manager (noscript) -->${maybeRenderHead()}<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NPDV6PW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/layout/NoScriptGTM.astro", void 0);

const $$Astro$e = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <!-- Google Analitycs -->
    ${renderComponent($$result, "GoogleAnalitycs", $$GoogleAnalitycs, {})}
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
    ${renderComponent($$result, "Seo", $$Seo, { "description": description, "image": image })}
    ${renderComponent($$result, "GoogleTagManager", $$GoogleTagManager, {})}
    ${renderComponent($$result, "StructuredData", $$StructuredData, {})}
  ${renderHead()}</head>
  <body>
    ${renderComponent($$result, "NoScriptGTM", $$NoScriptGTM, {})}
    ${renderSlot($$result, $$slots["default"])}
    
  </body>
</html>`;
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
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
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
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download w-3 pb-1 lg:pb-0 md:w-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
    <p class="mt-10 md:text-lg lg:text-2xl mx-2 md:mx-0 text-gray-400">
      ${user.description}
    </p>
    <a${addAttribute(`https:` + user.resume.fields.file.url, "href")} download type="button" class="bg-emerald-600 px-5 lg:px-10 md:py-4 py-2 rounded-full md:mb-5 font-bold border border-emerald-600 hover:bg-transparent transition-all duration-500 ease-out flex items-center mt-5 md:mt-10 w-32 md:w-36 lg:w-48 justify-center">
      ${renderComponent($$result, "Icons.DownloadIcon", Icons.DownloadIcon, {})}
      <p class="px-1 lg:px-2 text-xs md:text-sm lg:text-base">Resume</p>
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
  <p class="font-extrabold text-sm md:text-base mt-2">${title}</p>
</a>`;
}, "/home/duartebv/Documentos/Astro/linktree/src/components/ui/SocialMediaIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinksItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinksItem;
  const { title, links, icon } = Astro2.props;
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
    ${dataLinks.items.map(({ fields }) => renderTemplate`${renderComponent($$result, "LinksItem", $$LinksItem, { "title": fields?.title, "links": fields?.link, "icon": fields?.icon })}`)}
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

const getPersonalLinksData = await contentfulClient.getEntries({
  content_type: ContentTypes.PersonalLinks,
  order: ["sys.createdAt"]
});
const getProfesionalLinksData = await contentfulClient.getEntries({
  content_type: ContentTypes.ProfesionalLinks,
  order: ["sys.createdAt"]
});
const getUserData = await contentfulClient.getEntries({
  content_type: ContentTypes.User
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const [personalLinks, profesionalLinks, user] = await Promise.all([getPersonalLinksData, getProfesionalLinksData, getUserData]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eduardo Duarte", "description": user?.items[0]?.fields?.description, "image": user?.items[0]?.fields?.imageProfile.fields.file.url }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="container mx-auto text-white">
    ${renderComponent($$result2, "Header", $$Header, { "user": user?.items[0]?.fields })}
    ${renderComponent($$result2, "LinkSection", $$LinkSection, { "title": "Personal Links", "dataLinks": personalLinks })}
    ${renderComponent($$result2, "LinkSection", $$LinkSection, { "title": "Profesional Links", "dataLinks": profesionalLinks })}
  </main>
` })}`;
}, "/home/duartebv/Documentos/Astro/linktree/src/pages/index.astro", void 0);

const $$file = "/home/duartebv/Documentos/Astro/linktree/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
