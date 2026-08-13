const shimmer =
  "relative overflow-hidden bg-[var(--dialogColor)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-[var(--whiteColor60)] before:to-transparent motion-safe:before:animate-[shimmer_1.6s_infinite]";

/**
 * Skeleton that mirrors the hero layout, so the page does not jump
 * when the real content arrives.
 */
const Loading = () => {
  return (
    <div
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-24"
      role="status"
      aria-label="Loading page"
    >
      <div className="constrained-width mx-auto grid w-full grid-cols-1 items-center gap-x-12 gap-y-14 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className={`h-8 w-52 rounded-full ${shimmer}`} />
          <div className={`h-16 w-4/5 rounded-md ${shimmer}`} />
          <div className={`h-6 w-full max-w-lg rounded-sm ${shimmer}`} />
          <div className={`h-6 w-2/3 max-w-md rounded-sm ${shimmer}`} />

          <div className="flex gap-3 pt-2">
            <div className={`h-12 w-44 rounded-md ${shimmer}`} />
            <div className={`h-12 w-44 rounded-md ${shimmer}`} />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className={`aspect-[4/5] w-full max-w-[24rem] rounded-xl ${shimmer}`} />
        </div>
      </div>

      <span className="sr-only">Loading, one moment.</span>
    </div>
  );
};

export default Loading;
