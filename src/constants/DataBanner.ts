export interface ListItemBanner {
  type: "video" | "image";
  source: string;
  title: string;
  text?: string;
}

export interface DataBanner {
  keyType: string;
  items: ListItemBanner[];
}

export const BannerData: DataBanner[] = [
  {
    keyType: "common",
    items: [
      {
        type: "video",
        source:
          "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1700520753/Homepage%20Assets/Hero-Banners/16x9_Xmas_Loop.mp4",
        title: "HOLIDAY SPECIALS",
        text: "",
        // buttonText: "Play",
      },
      {
        type: "video",
        source:
          "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1696541785/Homepage%20Assets/Hero-Banners/hp-hero-k70-core.mp4",
        title: "K70 CORE RGB",
        text: "The CORSAIR K70 CORE gaming keyboard empowers your best play and makes gaming and typing amazing, with effortless media control and CORSAIR Red linear switches",
        // buttonText: "Play",
      },
      {
        type: "video",
        source:
          "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1696358754/Homepage%20Assets/Hero-Banners/hp-hero-dominator-titanium.mp4",
        title: "DOMINATOR TITANIUM",
        text: "Introducing the new CORSAIR DOMINATOR® TITANIUM DDR5 Memory, combining an elegant, restrained aesthetic with high-end performance you can rely on.",
        // buttonText: "Play",
      },
      {
        type: "video",
        source:
          "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1697563750/Homepage%20Assets/Hero-Banners/hp-hero-platform6.mp4",

        title: "CORSAIR PLATFORM:6",
        text: "A platform for creating, working, gaming, or studying.",
        // buttonText: "Play",
      },
      {
        type: "video",
        source:
          "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1692390033/Homepage%20Assets/Hero-Banners/hp_icue-link-hx.mp4",
        title: "iCUE LINK",
        text: "Experience the Future of DIY PC Building with iCUE LINK Smart Components.",
        // buttonText: "Play",
      },
      {
        type: "image",
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1687871241/akamai/hybris/homepage/images/hero-banner/hp-hero-xeneon-27qhd240-oled.webp",
        title: "XENEON 27QHD240 OLED",
        text: "Experience next level gaming with the newest 27-inch 240Hz OLED monitor.",
        // buttonText: "Learn More",
      },
    ],
  },
  {
    keyType: "gaming-pc-case",
    items: [
      {
        type: "video",
        source:
          "https://assets.corsair.com/video/upload/f_auto,q_auto/akamai/landing/pc-cases/pc-cases-lp-hero-video01.mp4",
        title: "CORSAIR PC CASES",
        text: "With 25+ years of expertise, CORSAIR has been committed to developing and delivering high-quality components that enable users to unleash their creativity, immerse themselves in gaming experiences, and maximize their productivity.",
      },
    ],
  },
  {
    keyType: "gaming-keyboards",
    items: [
      {
        type: "image",
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=3840&q=75 3840w",
        title: "K100 AIR WIRELESS",
        text: "ULTRA-THIN MECHANICAL GAMING KEYBOARD",
      },
      {
        type: "image",
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290479/TLC%20BANNER%20ASSETS/keyboards/K70_MAX_PBT_RENDER_43.png?w=3840&q=75 3840w",
        title: "K70 MAX",
        text: "RGB Magnetic-Mechanical Keyboard",
      },
      {
        type: "image",
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696290472/TLC%20BANNER%20ASSETS/keyboards/K70_CORE_BLACK_WITHOUT_PALM_REST_RENDER_22.jpg?w=3840&q=75 3840w",
        title: "K70 CORE",
        text: "RGB Mechanical Keyboard",
      },
    ],
  },
  {
    keyType: "gaming-headsets",
    items: [
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069101/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_virtuoso_pro_blk.png?w=3840&q=75 3840w",
        type: "image",
        title: "VIRTUOSO PRO",
        text: "OPEN-BACK GAMING/STREAMING HEADSET",
      },
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069160/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs80max_wireless.png?w=3840&q=75 3840w",
        type: "image",
        title: "HS80 MAX WIRELESS",
        text: "GAMING HEADSET",
      },
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1695069193/TLC%20BANNER%20ASSETS/headsets/all-headsets/tlc_headsets_banner_hs55_wireless_blk.png?w=3840&q=75 3840w",
        type: "image",
        title: "HS55 WIRELESS",
        text: "LIGHTWEIGHT GAMING HEADSET",
      },
    ],
  },
  {
    keyType: "gaming-nonitors",
    items: [
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1684442799/content/01_TLC/MONITORS/tlc-banner-monitors-bumblebee.webp?w=3840&q=75 3840w",
        type: "image",
        title: "XENEON 27QHD240 OLED",
        text: "Experience next level gaming with the newest 27-inch 240Hz OLED monitor.",
      },
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718576/akamai/TLC/Monitors/tlc_banners_monitors_flex.webp?w=3840&q=75 3840w",
        type: "image",
        title: "XENEON FLEX BENDABLE GAMING MONITOR",
        text: "Bend the rules. Change the game.",
      },
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1680718334/akamai/TLC/Monitors/xeneon_tlc_banner_2.webp?w=3840&q=75",
        type: "image",
        title: "XENEON 32UHD144 GAMING MONITOR",
        text: "Award-Winning Ultra-slim 32-inch IPS UHD display with a blazing fast refresh rate up to 144Hz and 1ms response time.",
      },
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1680719491/akamai/TLC/Global/tlc_banner_cases_builders_guide.webp?w=3840&q=75",
        type: "image",
        title: "PUT IT ALL TOGETHER",
        text: "Use our expert builder's guides to point yourself in the right direction.",
      },
    ],
  },
  {
    keyType: "gaming-mice",
    items: [
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=640&q=75 640w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=750&q=75 750w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=828&q=75 828w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=1080&q=75 1080w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=1200&q=75 1200w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=1920&q=75 1920w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=2048&q=75 2048w, https://assets.corsair.com/image/upload/f_auto/q_auto/v1696888282/TLC%20BANNER%20ASSETS/mice/tlc-m75-air-black-crop.png?w=3840&q=75 3840w",
        type: "image",
        title: "M75 AIR",
        text: "ULTRA-LIGHTWEIGHT WIRELESS GAMING MOUSE ",
      },
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1691019370/TLC%20BANNER%20ASSETS/mice/tlc-banner-nightsabre-mouse.webp?w=3840&q=75",
        type: "image",
        title: "NIGHTSABRE WIRELESS",
        text: "Hyper-fast sub-1ms SLIPSTREAM WIRELESS, 11 programmable buttons, and dazzling six-zone RGB.",
      },
      {
        source:
          "https://assets.corsair.com/image/upload/f_auto/q_auto/v1696885921/TLC%20BANNER%20ASSETS/mice/tlc-scimitar-elite-wireless.jpg?w=3840&q=75",
        type: "image",
        title: "SCIMITAR ELITE WIRELESS",
        text: "MMO GAMING MOUSE",
      },
    ],
  },
];
