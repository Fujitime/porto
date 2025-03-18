import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
    light: {
      background: string;
      text: string;
      primary: string;
    };
    dark: {
      background: string;
      text: string;
      primary: string;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "orange",
    blur: {
      top: "orange",
      bottom: "violet",
    },
    light: {
      background: "#ffffff",
      text: "#111827",
      primary: "#f97316",
    },
    dark: {
      background: "#0f0f11",
      text: "#f9fafb",
      primary: "#f97316",
    },
  },
};

export default theme;
