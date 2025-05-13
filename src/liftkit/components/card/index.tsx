
export interface LkCardProps extends React.HTMLAttributes<HTMLDivElement> {
  scaleFactor?: LkFontClass | "none";
  variant?: "fill" | "outline" | "transparent";
  material?: "flat" | "glass" | "rubber";
  opticalCorrection?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "x"
    | "y"
    | "all"
    | "none";
  isClickable?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Card(props: LkCardProps) {
  const { children, className, isClickable, scaleFactor, opticalCorrection, ...restProps } = props;

  function filterCustomProps(props: LkCardProps) {
    const nativeDivProps: (keyof React.HTMLAttributes<HTMLDivElement>)[] = [
      "children",
      "className",
      "id",
      "style",
      "onClick",
      "onMouseEnter",
      "onMouseLeave",
      "onFocus",
      "onBlur",
      "tabIndex",
      "role",
      "title",
    ];

    return Object.keys(props).reduce(
      (customProps, key) => {
        if (
          !nativeDivProps.includes(
            key as keyof React.HTMLAttributes<HTMLDivElement>,
          )
        ) {
          const kebabKey = `lk-card-${key
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .toLowerCase()}`;
          customProps[kebabKey] = props[key as keyof LkCardProps];
        }
        return customProps;
      },
      {} as Record<string, string | undefined>,
    );
  }

  const customProps = filterCustomProps(restProps);

  return (
    <div lk-component="card" {...customProps} {...restProps} className={`${className ?? ""} ${isClickable ? "clickable" : ""}`}
    >
      <div lk-component="slot" lk-slot="children">
        {children}
      </div>
    </div>
  );
}
