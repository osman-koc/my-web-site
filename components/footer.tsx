import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-muted bg-background py-6 text-sm text-muted-foreground/60">
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 md:px-8">
        <span>© {new Date().getFullYear()} osmankoc.dev</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
