"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Link from "next/link";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-24">
      <div className="constrained-width mx-auto flex flex-col items-start gap-7">
        <p className="label text-[var(--errorColor)]">Something broke</p>

        <h1 className="font-display">This page failed to load.</h1>

        <p className="measure text-base/8 text-[var(--textColorLight)]">
          The error has been reported. Try again — if it keeps happening, send
          me a message and I&apos;ll take a look.
        </p>

        {error.digest ? (
          <p className="mono rounded-sm border border-[var(--borderColor)] bg-[var(--dialogColor)] px-3 py-2 text-xs/6 text-[var(--textColorLight)]">
            Reference: {error.digest}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <button className="app__filled_btn" onClick={() => reset()}>
            Try again
          </button>
          <Link href="/" className="app__outlined_btn">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
