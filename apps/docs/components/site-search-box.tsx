"use client";

import { useRouter } from "next/navigation";
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
} from "liftkit";

export type SearchPage = { title: string; href: string; section: string };

// Chrome width is a fixed rem on purpose: length tokens grow with the scale factor, and the header shouldn't.
const SEARCH_WIDTH = { width: "14rem" };

/** Header search: type a page name, pick a result (click, or arrow keys and Enter) to open it. */
export function SiteSearchBox({ pages }: { pages: SearchPage[] }) {
  const router = useRouter();

  return (
    <div style={SEARCH_WIDTH}>
      <Autocomplete items={pages} itemToStringValue={(page) => (page as SearchPage).title}>
        <AutocompleteInput aria-label="Search pages" placeholder="Search pages" style={{ marginTop: 0 }} />
        <AutocompletePortal>
          <AutocompletePositioner sideOffset={4} align="end">
            {/* The portal puts the popup in <body>; the lock keeps it on the header's theme (see PanelThemeLock) */}
            <AutocompletePopup data-theme-locked style={{ minWidth: "18rem" }}>
              <AutocompleteEmpty>No pages found.</AutocompleteEmpty>
              <AutocompleteList>
                {(page: SearchPage) => (
                  <AutocompleteItem key={page.href} value={page} onClick={() => router.push(page.href)}>
                    <span className="fill-container">{page.title}</span>
                    <span className="caption color-onsurfacevariant">{page.section}</span>
                  </AutocompleteItem>
                )}
              </AutocompleteList>
            </AutocompletePopup>
          </AutocompletePositioner>
        </AutocompletePortal>
      </Autocomplete>
    </div>
  );
}
