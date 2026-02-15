import Link from "next/link";
import "./props-table.css";

export interface PropRow {
  name: string;
  type: string;
  typeLink?: string | null;
  required: boolean;
  description: string;
  default: string;
}

export interface PropsTableProps {
  rows: PropRow[];
}

export function PropsTable({ rows }: PropsTableProps) {
  if (rows.length === 0) {
    return <p className="lk-props-table-empty">No props documented.</p>;
  }

  return (
    <div className="lk-props-table-wrapper">
      <table className="lk-props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <code className="lk-props-table-prop-name">{row.name}</code>
              </td>
              <td>
                {row.typeLink ? (
                  <Link
                    href={row.typeLink}
                    className="lk-props-table-type-link"
                    target={row.typeLink.startsWith("http") ? "_blank" : undefined}
                    rel={row.typeLink.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <code className="lk-props-table-type">{row.type}</code>
                  </Link>
                ) : (
                  <code className="lk-props-table-type">{row.type}</code>
                )}
              </td>
              <td className="lk-props-table-required">
                {row.required ? "Yes" : "No"}
              </td>
              <td>
                <code className="lk-props-table-default">
                  {row.default || "-"}
                </code>
              </td>
              <td className="lk-props-table-description">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}