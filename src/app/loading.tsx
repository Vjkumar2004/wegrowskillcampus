export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10"
    >
      <span className="sr-only">Loading page…</span>
      <div className="relative min-h-[330px] animate-pulse overflow-hidden rounded-[24px] bg-[#0B3B8F]/15 sm:min-h-[380px] sm:rounded-[30px] lg:min-h-[430px]">
        <div className="absolute inset-y-0 left-0 flex w-full max-w-3xl flex-col justify-center gap-5 px-6 sm:px-10 lg:px-14">
          <div className="h-7 w-36 rounded-full bg-[#F7820E]/35" />
          <div className="h-10 w-4/5 rounded-lg bg-[#0B3B8F]/20 sm:h-14" />
          <div className="h-4 w-full max-w-xl rounded bg-[#0B3B8F]/15" />
          <div className="h-4 w-3/4 max-w-lg rounded bg-[#0B3B8F]/15" />
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#F7820E] sm:w-48" />
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="animate-pulse rounded-2xl border border-[#E3E8F0] bg-white p-6 shadow-sm">
            <div className="h-4 w-1/3 rounded bg-[#F7820E]/20" />
            <div className="mt-5 h-6 w-4/5 rounded bg-[#0B3B8F]/15" />
            <div className="mt-4 h-4 rounded bg-slate-100" />
            <div className="mt-2 h-4 w-5/6 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
