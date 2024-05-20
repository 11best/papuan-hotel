export default function Page() {
  return (
    <div className="p-4 grid gap-4">
      <div>
        <h3 className="font-bold">button</h3>
        <div className="grid grid-cols-12 gap-4">
          <button className="btn">test</button>
          <button className="btn btn-primary">test</button>
          <button className="btn btn-secondary">test</button>
          <button className="btn btn-accent">test</button>
          <button className="btn btn-neutral">test</button>
          <button className="btn btn-ghost">test</button>
          <button className="btn btn-link">test</button>
        </div>
      </div>

      <div>
        <h3 className="font-bold">button outline</h3>
        <div className="grid grid-cols-12 gap-4">
          <button className="btn btn-outline">test</button>
          <button className="btn btn-outline btn-primary">test</button>
          <button className="btn btn-outline btn-secondary">test</button>
          <button className="btn btn-outline btn-accent">test</button>
          <button className="btn btn-outline btn-neutral">test</button>
          <button className="btn btn-outline btn-ghost">test</button>
          <button className="btn btn-outline btn-link">test</button>
        </div>
      </div>

      <div>
        <h3 className="font-bold">button state color</h3>
        <div className="grid grid-cols-12 gap-4">
          <button className="btn btn-info">test</button>
          <button className="btn btn-success">test</button>
          <button className="btn btn-warning">test</button>
          <button className="btn btn-error">test</button>
        </div>
      </div>
    </div>
  );
}
