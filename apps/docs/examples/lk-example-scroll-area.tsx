import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@chainlift/liftkit";

export function ExampleScrollArea() {
  return (
    <ScrollArea style={{height: "200px"}}>
      <ScrollAreaViewport>
        <ScrollAreaContent>
          <p className="body">
            Vernacular architecture is building done outside any academic tradition, and without professional guidance.
            It is not a particular architectural movement or style, but rather a broad category, encompassing a wide
            range and variety of building types, with differing methods of construction, from around the world, both
            historical and extant and classical and modern. Vernacular architecture constitutes 95% of the world's built
            environment, as estimated in 1995 by Amos Rapoport, as measured against the small percentage of new
            buildings every year designed by architects and built by engineers.
          </p>
          <p className="body">
            This type of architecture usually serves immediate, local needs, is constrained by the materials available
            in its particular region and reflects local traditions and cultural practices. The study of vernacular
            architecture does not examine formally schooled architects, but instead that of the design skills and
            tradition of local builders, who were rarely given any attribution for the work. More recently, vernacular
            architecture has been examined by designers and the building industry in an effort to be more energy
            conscious with contemporary design and construction—part of a broader interest in sustainable design.
          </p>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollArea>
  );
}
