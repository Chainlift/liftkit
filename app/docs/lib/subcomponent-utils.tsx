import "./subcomponent-table-styles.css";

/**
 * Utilities for working with sub-components from the component manifest
 * These helpers make it easy to render props tables and documentation for compound components
 */

import { componentManifest, type ComponentName, type SubComponentEntry } from "./component-manifest";

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
            <th>Attribute</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponent.dataAttributes.map((attr) => (
            <tr key={attr.name}>
              <td>{attr.name}</td>
              <td>{attr.type || "-"}</td>
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
  className?: string;
}

export function SubComponentDocs({ componentName, subComponentName, className }: SubComponentDocsProps) {
  const subComponent = getSubComponent(componentName, subComponentName);

  if (!subComponent) {
    return null;
  }

  return (
    <div className={className} data-instance="lk-docs-table">
      {/* Header */}
      <div className="mb-6">
        <h3 className="title3-bold mb-sm">{subComponentName}</h3>
        {subComponent.description && <p className="text-gray-600 mb-2">{subComponent.description}</p>}
        {subComponent.renders && (
          <p className="text-sm text-gray-500">
            Renders a <code className="bg-gray-100 px-1 py-0.5 rounded">{subComponent.renders}</code> element.
          </p>
        )}
      </div>

      {/* Props */}
      {subComponent.props && subComponent.props.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-3">Props</h4>
          <SubComponentPropsTable componentName={componentName} subComponentName={subComponentName} />
        </div>
      )}

      {/* Data Attributes */}
      {subComponent.dataAttributes && subComponent.dataAttributes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-3">Data Attributes</h4>
          <SubComponentDataAttributesTable componentName={componentName} subComponentName={subComponentName} />
        </div>
      )}

      {/* CSS Variables */}
      {subComponent.cssVariables && subComponent.cssVariables.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-3">CSS Variables</h4>
          <SubComponentCSSVariablesTable componentName={componentName} subComponentName={subComponentName} />
        </div>
      )}
    </div>
  );
}
