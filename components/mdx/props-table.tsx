import fs from "node:fs";
import path from "node:path";

export function PropsTable({ name }: { name: string }) {
  const file = path.join(process.cwd(), "src", "generated", "props", `${name}.json`);
  const json = JSON.parse(fs.readFileSync(file, "utf8"));

  const rows = Object.entries(json.props ?? {}).map(([propName, p]: any) => ({
    propName,
    type: p.type?.name ?? "",
    required: !!p.required,
    description: p.description ?? "",
    defaultValue: p.defaultValue?.value ?? "",
  }));

  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.propName}>
              <td><code>{r.propName}</code></td>
              <td><code>{r.type}</code></td>
              <td>{r.required ? "yes" : "no"}</td>
              <td><code>{r.defaultValue}</code></td>
              <td>{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
