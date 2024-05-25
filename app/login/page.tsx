export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <form className="card-body gap-4">
          <input
            required
            type="text"
            placeholder="Username"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="card-actions justify-center">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
