import { SidebarNavItems } from "@/components/sidebar";
import { ReactNode } from "react";

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
          link: "/docs/components/blob",
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

export type propsTableItem = {
  prop: string;
  description: string;
  type: string;
  default: string;
};

interface propsTable {
  [component: string]: propsTableItem[];
}

export const propsTableData: propsTable = {
  "particle-wave": [
    {
      prop: "particlesCount",
      description: "Number of particles in the wave",
      type: "number",
      default: "500",
    },
    {
      prop: "xLength",
      description: "Length of the wave in the X direction",
      type: "number",
      default: "14",
    },
    {
      prop: "yLength",
      description: "Length of the wave in the Y direction",
      type: "number",
      default: "14",
    },
    {
      prop: "zLength",
      description: "Length of the wave in the Z direction",
      type: "number",
      default: "4",
    },
    {
      prop: "duration",
      description: "In milliseconds - governs the speed of the wave",
      type: "number",
      default: "1000",
    },
    {
      prop: "startColor",
      description:
        "The start color in the `lerp` function while calculating the color of each particle",
      type: "string",
      default: "#7439e2",
    },
    {
      prop: "endColor",
      description:
        "The end color in the `lerp` function while calculating the color of each particle",
      type: "string",
      default: "#ce9082",
    },
    {
      prop: "geometry",
      description: "Geometry defines the shape of the particle",
      type: "BufferGeometry",
      default: "new SphereGeometry(0.02, 4, 4)",
    },
    {
      prop: "material",
      description: "Material of the particle in the wave",
      type: "Material",
      default: "new MeshStandardMaterial({ color: startColor })",
    },
    {
      prop: "waveFunction",
      description: "Mathematical expression governing the shape of the wave",
      default: "Mathematical expression governing the shape of the wave",
      type: "sineWaveXZ",
    },
  ],
};
