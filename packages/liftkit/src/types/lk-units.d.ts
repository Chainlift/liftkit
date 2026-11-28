export {};

declare global {
  /**
   * The base units of measurement in LiftKit. Uses `em` units where 'md' = 1em.
   * As it increases from 'md,' each step multiplies the previous size by var(--lk-scalefactor).
   * As it decreases from 'md,' each step divides the previous size by var(--lk-scalefactor).
   * Smaller sizes divide the previous size by
   */
  type LkSizeUnit =
    | "5xs"
    | "4xs"
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl";
  /**
   * The maximum content width of a Container.
   * xs = 80ch, sm = 1280px, md = 1440px, lg = 1600px, xl = 1920px, none = 100%.
   */
  type LkContainerWidth = "xs" | "sm" | "md" | "lg" | "xl" | "none";
}
