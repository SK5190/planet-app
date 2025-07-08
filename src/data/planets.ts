export interface PlanetStat {
  label: string;
  value: string;
}

export interface PlanetImages {
  overview: string;
  structure: string;
  geology: string;
}

export interface PlanetData {
  name: string;
  description: string;
  images: PlanetImages;
  source: string;
  stats: PlanetStat[];
}

export const planets: PlanetData[] = [
  {
    name: "Earth",
    description:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    images: {
      overview: "/planet-app/assets/planet-earth.svg",
      structure: "/planet-app/assets/planet-earth-internal.svg",
      geology: "/planet-app/assets/geology-earth.png"
    },
    source: "https://en.wikipedia.org/wiki/Earth",
    stats: [
      { label: "ROTATION TIME", value: "0.99 Days" },
      { label: "REVOLUTION TIME", value: "365.26 Days" },
      { label: "RADIUS", value: "6,371 KM" },
      { label: "AVERAGE TEMP.", value: "16°C" },
    ],
  },
  {
    name: "Mercury",
    description:
      "Mercury is the smallest planet in our solar system and closest to the Sun. It's only slightly larger than Earth's Moon and has a very thin atmosphere.",
    images: {
      overview: "/planet-app/assets/planet-mercury.svg",
      structure: "/planet-app/assets/planet-mercury-internal.svg",
      geology: "/planet-app/assets/geology-mercury.png"
    },
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    stats: [
      { label: "ROTATION TIME", value: "58.6 Days" },
      { label: "REVOLUTION TIME", value: "87.97 Days" },
      { label: "RADIUS", value: "2,439.7 KM" },
      { label: "AVERAGE TEMP.", value: "167°C" },
    ],
  },
  {
    name: "Venus",
    description:
      "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. It's one of the four inner, terrestrial (or rocky) planets, and it's often called Earth's twin because it's similar in size and density.",
    images: {
      overview: "/planet-app/assets/planet-venus.svg",
      structure: "/planet-app/assets/planet-venus-internal.svg",
      geology: "/planet-app/assets/geology-venus.png"
    },
    source: "https://en.wikipedia.org/wiki/Venus",
    stats: [
      { label: "ROTATION TIME", value: "243 Days" },
      { label: "REVOLUTION TIME", value: "224.7 Days" },
      { label: "RADIUS", value: "6,051.8 KM" },
      { label: "AVERAGE TEMP.", value: "464°C" },
    ],
  },
  {
    name: "Mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. It is often referred to as the 'Red Planet' due to its reddish appearance.",
    images: {
      overview: "/planet-app/assets/planet-mars.svg",
      structure: "/planet-app/assets/planet-mars-internal.svg",
      geology: "/planet-app/assets/geology-mars.png"
    },
    source: "https://en.wikipedia.org/wiki/Mars",
    stats: [
      { label: "ROTATION TIME", value: "1.03 Days" },
      { label: "REVOLUTION TIME", value: "1.88 Years" },
      { label: "RADIUS", value: "3,389.5 KM" },
      { label: "AVERAGE TEMP.", value: "-65°C" },
    ],
  },
  {
    name: "Jupiter",
    description:
      "Jupiter is the largest planet in our solar system and is known for its Great Red Spot, a giant storm. It is a gas giant and has a very strong magnetic field.",
    images: {
      overview: "/planet-app/assets/planet-jupiter.svg",
      structure: "/planet-app/assets/planet-jupiter-internal.svg",
      geology: "/planet-app/assets/geology-jupiter.png"
    },
    source: "https://en.wikipedia.org/wiki/Jupiter",
    stats: [
      { label: "ROTATION TIME", value: "9.93 Hours" },
      { label: "REVOLUTION TIME", value: "11.86 Years" },
      { label: "RADIUS", value: "69,911 KM" },
      { label: "AVERAGE TEMP.", value: "-108°C" },
    ],
  },
  {
    name: "Saturn",
    description:
      "Saturn is the sixth planet from the Sun and is famous for its beautiful rings. It is a gas giant and the second-largest planet in our solar system.",
    images: {
      overview: "/planet-app/assets/planet-saturn.svg",
      structure: "/planet-app/assets/planet-saturn-internal.svg",
      geology: "/planet-app/assets/geology-saturn.png"
    },
    source: "https://en.wikipedia.org/wiki/Saturn",
    stats: [
      { label: "ROTATION TIME", value: "10.7 Hours" },
      { label: "REVOLUTION TIME", value: "29.45 Years" },
      { label: "RADIUS", value: "58,232 KM" },
      { label: "AVERAGE TEMP.", value: "-138°C" },
    ],
  },
  {
    name: "Uranus",
    description:
      "Uranus is the seventh planet from the Sun. It has a blue-green color due to methane in its atmosphere and rotates on its side compared to other planets.",
    images: {
      overview: "/planet-app/assets/planet-uranus.svg",
      structure: "/planet-app/assets/planet-uranus-internal.svg",
      geology: "/planet-app/assets/geology-uranus.png"
    },
    source: "https://en.wikipedia.org/wiki/Uranus",
    stats: [
      { label: "ROTATION TIME", value: "17.2 Hours" },
      { label: "REVOLUTION TIME", value: "84 Years" },
      { label: "RADIUS", value: "25,362 KM" },
      { label: "AVERAGE TEMP.", value: "-195°C" },
    ],
  },
  {
    name: "Neptune",
    description:
      "Neptune is the eighth and farthest known planet from the Sun in the Solar System. It is a deep blue color and is known for its strong winds.",
    images: {
      overview: "/planet-app/assets/planet-neptune.svg",
      structure: "/planet-app/assets/planet-neptune-internal.svg",
      geology: "/planet-app/assets/geology-neptune.png"
    },
    source: "https://en.wikipedia.org/wiki/Neptune",
    stats: [
      { label: "ROTATION TIME", value: "16.08 Hours" },
      { label: "REVOLUTION TIME", value: "164.8 Years" },
      { label: "RADIUS", value: "24,622 KM" },
      { label: "AVERAGE TEMP.", value: "-201°C" },
    ],
  },
]; 