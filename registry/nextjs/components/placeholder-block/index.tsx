export default function PlaceholderBlock() {
  return (
    <>
      <div lk-component="placeholder-block">
        <div className="capline-mono opacity-60">Placeholder</div>
      </div>
      <style jsx>{`
        [lk-component="placeholder-block"] {
          display: block;
          border: 1px dashed var(--lk-color-info);
          background-color: var(--lk-color-infocontainer);
          padding: var(--lk-size-md);
        }
      `}</style>
    </>
  );
}
