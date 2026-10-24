export {};

declare global {
  /**
   * The base units of measurement in LiftKit. Uses `em` units where 'md' = 1em.
   * As it increases from 'md,' each step multiplies the previous size by var(--lk-scalefactor).
   * As it decreases from 'md,' each step divides the previous size by var(--lk-scalefactor).
   * Smaller sizes divide the previous size by
   */
  type LkSizeUnit =
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl";
  /**
   * The maximum width of container elements.
   * If you need something besides the allowed values, set it to 'auto'
   * and then pass a custom width in the style prop OR use a custom className.
   */
  type LkContainerWidth = "xs" | "sm" | "md" | "lg" | "xl" | "none" | "auto";
}
