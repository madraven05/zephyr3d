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
        {
          title: "Earth 3D",
          link: "/docs/components/e-card",
          childItems: [
            {
              title: "Standard Earth 3D",
              link: "/docs/components/standard-earth-3d",
            },
            {
              title: "Rendering GSON Data",
              link: "/docs/components/geojson-earth-3d",
            },
          ],
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
          link: "/docs/components/",
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
