import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

/**
 * Converts Markdown-style asterisks to HTML strong tags with appropriate styling for dark/light mode
 * Example: "I am a *designer* and *developer*" => "I am a <strong class="text-accent-light dark:text-orange-500 font-normal">designer</strong> and <strong class="text-accent-light dark:text-orange-500 font-normal">developer</strong>"
 */
const convertAsteriskToStrongTag = (text: string): string => {
  return text.replace(
    /\*([^*]+)\*/g,
    '<strong class="text-accent-light dark:text-orange-500 font-normal">$1</strong>'
  );
};

export default convertAsteriskToStrongTag;
