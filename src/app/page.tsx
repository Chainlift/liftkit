
import Button from "@/liftkit/components/button";



export default function Home() {
  const variants = ["fill", "outline", "text"] as const;
  const sizes = ["sm", "md", "lg"] as const;

  return (

<div>
      {variants.map((variant) => (
        <div key={variant}>
          <h2>{variant} Variant</h2>
          <div>
            {sizes.map((size) => (
              <div key={`${variant}-${size}`}>
                <h3>Size: {size}</h3>
                <div>
                  <div>
                    <Button
                      label="Left Icon"
                      variant={variant}
                      size={size}
                      color="error"
                      startIcon="airplay"
                    />
                    <span>startIcon</span>
                  </div>
                  <div>
                    <Button
                      label="Right Icon"
                      variant={variant}
                      size={size}
                      color="primary"
                      endIcon="airplay"
                    />
                    <span>endIcon</span>
                  </div>
                  <div>
                    <Button
                      label="Both Icons"
                      variant={variant}
                      size={size}
                      color="primary"
                      startIcon="airplay"
                      endIcon="airplay"
                    />
                    <span>both</span>
                  </div>
                  <div>
                    <Button
                      label="No Icon"
                      variant={variant}
                      size={size}
                      color="primary"
                    />
                    <span>none</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

    

    </div>
  );
 
}
