import { SidebarNavItems } from "@/components/sidebar";

export const sidebarNavItems: SidebarNavItems = {
  components: [
    {
      category: "Data Display",
      navItems: [
        {
          title: "Product Card",
          link: "/docs/components/product-card",
        },
      ],
    },
    {
      category: "Visual Components",
      navItems: [
        {
          title: "Particle Wave",
          link: "/docs/components/particles-wave",
        },
        {
          title: "Particled Mesh",
          link: "",
          childItems: [
            {
              title: "Particle Mesh",
              link: "/docs/components/particle-mesh",
            },
            {
              title: "Morph Particle Meshes",
              link: "/docs/components/morph-particle-meshes",
            },
          ],
        },
        {
          title: "Blob",
          link: "",
          childItems: [
            {
              title: "Standard Blob",
              link: "/docs/components/blob",
            },
            {
              title: "Music Blob",
              link: "/docs/components/music-blob",
            },
          ],
        },
      ],
    },
  ],
  dev: [
    {
      category: "Basic Usage",
      navItems: [
        {
          title: "Getting Started",
          link: "/dev/",
        },
      ],
    },
    {
      category: "Other",
      navItems: [
        {
          title: "FAQ",
          link: "/dev/",
        },
        {
          title: "Contributing",
          link: "/dev/",
        },
      ],
    },
  ],
};
