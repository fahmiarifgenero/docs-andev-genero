import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Docs Andev Dashboard",
      };
    }
  },
  logo: <span>Andev Dashboard</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },
  search: {
    placeholder: "Search...",
  },
  sidebar: {
    autoCollapse: false,
    defaultMenuCollapseLevel: 1,
  },
  faviconGlyph: "📝",
  // feedback: {
  //   content: null,
  // },
  editLink: {
    component: null,
  },
  navbar: {
    extraContent: <a href="https://google.com">Hello</a>,
  },
};

export default config;
