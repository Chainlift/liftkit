import React from 'react';

const TYPOGRAPHY_CLASSES = [
  "display1",
  "display1-bold",
  "display2",
  "display2-bold",
  "title1",
  "title1-bold",
  "title2",
  "title2-bold",
  "title3",
  "title3-bold",
  "heading",
  "heading-bold",
  "subheading",
  "subheading-bold",
  "body",
  "body-bold",
  "callout",
  "callout-bold",
  "label",
  "label-bold",
  "caption",
  "caption-bold",
  "capline",
  "capline-bold",
];

// Generate all margin classes for all sizes
const MARGIN_CLASSES = [
  "m-2xs", "m-xs", "m-sm", "m-md", "m-lg", "m-xl", "m-2xl",
  "mt-2xs", "mt-xs", "mt-sm", "mt-md", "mt-lg", "mt-xl", "mt-2xl",
  "mb-2xs", "mb-xs", "mb-sm", "mb-md", "mb-lg", "mb-xl", "mb-2xl",
  "ml-2xs", "ml-xs", "ml-sm", "ml-md", "ml-lg", "ml-xl", "ml-2xl",
  "mr-2xs", "mr-xs", "mr-sm", "mr-md", "mr-lg", "mr-xl", "mr-2xl"
];

export const TypographySpacingTest: React.FC = () => {
  return (
    <div data-testid="typography-spacing-test">
      {TYPOGRAPHY_CLASSES.map((typographyClass) => (
        <div key={typographyClass} data-typography-class={typographyClass}>
          <h3>{typographyClass}</h3>
          {MARGIN_CLASSES.map((marginClass) => {
            const combinedClass = `${typographyClass} ${marginClass}`;
            const testId = `${typographyClass}-${marginClass}`;
            
            return (
              <div
                key={marginClass}
                className="outline outline-info"
                style={{ border: '1px solid #ccc', marginBottom: '4px' }}
              >
                <div
                  className={`${combinedClass} bg-info p-2`}
                  id={testId}
                  data-typography-class={typographyClass}
                  data-margin-class={marginClass}
                >
                  {typographyClass} {marginClass}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TypographySpacingTest;