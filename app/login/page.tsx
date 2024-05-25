export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body gap-4">
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
