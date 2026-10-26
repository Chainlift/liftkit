import "./subcomponent-table-styles.css";
import { Button } from "@chainlift/liftkit";
import type { SubComponentEntry } from "./component-doc";

/** Tables documenting one part of a compound component (e.g. Accordion's Root, Item, Trigger). */

/**
 * Component to render a props table for a sub-component
 * Usage: <SubComponentPropsTable name="Root" subComponent={meta.subComponents.Root} />
 */
interface SubComponentPropsTableProps {
  name: string;
  subComponent: SubComponentEntry;
  className?: string;
}

export function SubComponentPropsTable({ subComponent, className }: SubComponentPropsTableProps) {

  if (!subComponent || !subComponent.props || subComponent.props.length === 0) {
    return null;
  }

  return (
    <div data-instance="lk-docs-table">
      <table>
        <colgroup>
          <col width="16.6%" />
          <col width="16.6%" />
          <col width="16.6%" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponent.props.map((prop) => (
            <tr key={prop.name}>
              <td>
                {prop.name}
                {prop.required && <span>*</span>}
              </td>
              <td>{prop.type}</td>
              <td>{prop.defaultValue || "-"}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Component to render data attributes table for a sub-component
 */
interface SubComponentDataAttributesTableProps {
  name: string;
  subComponent: SubComponentEntry;
  className?: string;
}

export function SubComponentDataAttributesTable({
  subComponent,
  className,
}: SubComponentDataAttributesTableProps) {

  if (!subComponent || !subComponent.dataAttributes || subComponent.dataAttributes.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <table>
        <thead>
          <tr>
            <th>Data Attribute</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponent.dataAttributes.map((attr) => (
            <tr key={attr.name}>
              <td>{attr.name}</td>
              <td>{attr.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Component to render CSS variables table for a sub-component
 */
interface SubComponentCSSVariablesTableProps {
  name: string;
  subComponent: SubComponentEntry;
  className?: string;
}

export function SubComponentCSSVariablesTable({
  subComponent,
  className,
}: SubComponentCSSVariablesTableProps) {

  if (!subComponent || !subComponent.cssVariables || subComponent.cssVariables.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponent.cssVariables.map((cssVar) => (
            <tr key={cssVar.name}>
              <td>{cssVar.name}</td>
              <td>{cssVar.type || "-"}</td>
              <td>{cssVar.defaultValue || "-"}</td>
              <td>{cssVar.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Combined component that renders all documentation for a sub-component
 */
interface SubComponentDocsProps {
  name: string;
  subComponent: SubComponentEntry;
  linkToSource?: string;
  className?: string;
}

export function SubComponentDocs({ name, subComponent, linkToSource, className }: SubComponentDocsProps) {

  if (!subComponent) {
    return null;
  }

  return (
    <div className={className} data-instance="lk-docs-table">
      {/* Header */}
      <div data-slot="table-block">
        <h3
          className="title2-bold mb-xs"
          data-instance="component-name"
          id={name.toLowerCase().replace(/\s+/g, "-")}
        >
          {name}
        </h3>
        {subComponent.description && (
          <p className="body mb-lg color-onsurfacelow">
            {subComponent.description} Renders a{" "}
            <code>{subComponent.renders}</code> element.
          </p>
        )}
      </div>

      {/* Props */}
      {subComponent.props && subComponent.props.length > 0 && (
        <div data-slot="table-block">
          <div className="flex items-baseline justify-start">
            <h4 className="body-bold color-onsurfacelow mb-sm">Props</h4>
            {linkToSource && (
              <a
                href={linkToSource}
                target="_blank"
                rel="noopener noreferrer"
                className="body color-primary flex items-center"
              >
                <Button fontClass="subheading" variant="text" label="Full API Reference" className="font-500" />
              </a>
            )}
          </div>
          <SubComponentPropsTable name={name} subComponent={subComponent} />
        </div>
      )}

      {/* Data Attributes */}
      {subComponent.dataAttributes && subComponent.dataAttributes.length > 0 && (
        <div data-slot="table-block">
          <h4 className="body-bold mt-lg mb-sm color-onsurfacelow">Data Attributes</h4>
          <SubComponentDataAttributesTable name={name} subComponent={subComponent} />
        </div>
      )}

      {/* CSS Variables */}
      {subComponent.cssVariables && subComponent.cssVariables.length > 0 && (
        <div data-slot="table-block">
          <h4 className="heading mt-lg mb-sm color-onsurfacelow">CSS Variables</h4>
          <SubComponentCSSVariablesTable name={name} subComponent={subComponent} />
        </div>
      )}
    </div>
  );
}
