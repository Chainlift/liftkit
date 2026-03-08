import "./subcomponent-table-styles.css";

/**
 * Utilities for working with sub-components from the component manifest
 * These helpers make it easy to render props tables and documentation for compound components
 */

import { componentManifest, type ComponentName, type SubComponentEntry } from "./component-manifest";
import { link } from "fs";
import { Button, Icon } from "@/liftkit/component-definitions";

/**
 * Get all sub-components for a given component
 */
export function getSubComponents(componentName: ComponentName): Record<string, SubComponentEntry> | undefined {
  return componentManifest[componentName]?.subComponents;
}

/**
 * Get a specific sub-component
 */
export function getSubComponent(componentName: ComponentName, subComponentName: string): SubComponentEntry | undefined {
  return componentManifest[componentName]?.subComponents?.[subComponentName];
}

/**
 * Get all sub-component names for a component
 */
export function getSubComponentNames(componentName: ComponentName): string[] {
  const subComponents = getSubComponents(componentName);
  return subComponents ? Object.keys(subComponents) : [];
}

/**
 * Check if a component has sub-components
 */
export function hasSubComponents(componentName: ComponentName): boolean {
  const subComponents = getSubComponents(componentName);
  return !!subComponents && Object.keys(subComponents).length > 0;
}

/**
 * Component to render a props table for a sub-component
 * Usage: <SubComponentPropsTable componentName="accordion" subComponentName="Root" />
 */
interface SubComponentPropsTableProps {
  componentName: ComponentName;
  subComponentName: string;
  className?: string;
}

export function SubComponentPropsTable({ componentName, subComponentName, className }: SubComponentPropsTableProps) {
  const subComponent = getSubComponent(componentName, subComponentName);

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
  componentName: ComponentName;
  subComponentName: string;
  className?: string;
}

export function SubComponentDataAttributesTable({
  componentName,
  subComponentName,
  className,
}: SubComponentDataAttributesTableProps) {
  const subComponent = getSubComponent(componentName, subComponentName);

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
  componentName: ComponentName;
  subComponentName: string;
  className?: string;
}

export function SubComponentCSSVariablesTable({
  componentName,
  subComponentName,
  className,
}: SubComponentCSSVariablesTableProps) {
  const subComponent = getSubComponent(componentName, subComponentName);

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
  componentName: ComponentName;
  subComponentName: string;
  linkToSource?: string;
  className?: string;
}

export function SubComponentDocs({ componentName, subComponentName, linkToSource, className }: SubComponentDocsProps) {
  const subComponent = getSubComponent(componentName, subComponentName);

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
          id={subComponentName.toLowerCase().replace(/\s+/g, "-")}
        >
          {subComponentName}
        </h3>
        {subComponent.description && (
          <p className="body mb-lg color-onsurfacelow">
            {subComponent.description} Renders a{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">{subComponent.renders}</code> element.
          </p>
        )}
        {subComponent.renders && <p className="text-sm text-gray-500"></p>}
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
          <SubComponentPropsTable componentName={componentName} subComponentName={subComponentName} />
        </div>
      )}

      {/* Data Attributes */}
      {subComponent.dataAttributes && subComponent.dataAttributes.length > 0 && (
        <div data-slot="table-block">
          <h4 className="body-bold mt-lg mb-sm color-onsurfacelow">Data Attributes</h4>
          <SubComponentDataAttributesTable componentName={componentName} subComponentName={subComponentName} />
        </div>
      )}

      {/* CSS Variables */}
      {subComponent.cssVariables && subComponent.cssVariables.length > 0 && (
        <div data-slot="table-block">
          <h4 className="heading mt-lg mb-sm color-onsurfacelow">CSS Variables</h4>
          <SubComponentCSSVariablesTable componentName={componentName} subComponentName={subComponentName} />
        </div>
      )}
    </div>
  );
}
