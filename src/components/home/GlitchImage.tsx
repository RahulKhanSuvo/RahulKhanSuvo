"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

interface GlitchImageProps {
  src: string | StaticImageData;
  alt?: string;
}

function GlitchImage({ src, alt = "Portrait" }: GlitchImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveringRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.max(1, container.clientWidth) * dpr;
      canvas.height = Math.max(1, container.clientHeight) * dpr;
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const BAND_COUNT = 5;
    const bands = Array.from({ length: BAND_COUNT }, () => ({
      y: 0,
      h: 12,
      dx: 0,
      blur: 0,
      ty: 0,
      th: 12,
      tdx: 0,
      tblur: 0,
    }));
    let chromaX = 0;
    let targetChromaX = 0;
    let last = 0;
    let tickCount = 0;

    const tick = (now: number) => {
      rafRef.current = requestAnimationFrame(tick);
      const img = imgRef.current;
      if (!img || !img.complete || !img.naturalWidth) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (!hoveringRef.current) return;

      const delta = last ? Math.min(50, now - last) : 16;
      last = now;
      const ease = 1 - Math.exp(-(delta / 1000) * 4);
      tickCount++;

      const cx = w * 0.18;
      const cy = h * 0.3;
      const cw = w * 0.64;
      const ch = h * 0.4;

      ctx.drawImage(img, 0, 0, w, h);

      if (tickCount % 24 === 0) {
        for (const b of bands) {
          b.ty = cy + Math.random() * ch;
          b.th = 6 + Math.random() * 22;
          b.tdx = (Math.random() - 0.5) * 30;
          b.tblur = Math.random() > 0.6 ? 2 : 0;
        }
        targetChromaX = (Math.random() - 0.5) * 22;
      }

      for (const b of bands) {
        b.y += (b.ty - b.y) * ease;
        b.h += (b.th - b.h) * ease;
        b.dx += (b.tdx - b.dx) * ease;
        b.blur += (b.tblur - b.blur) * ease;
        if (b.dx !== 0 || b.blur > 0) {
          ctx.filter = b.blur > 0.3 ? `blur(${b.blur}px)` : "none";
          ctx.drawImage(img, 0, b.y, w, b.h, b.dx, b.y, w, b.h);
        }
      }
      ctx.filter = "none";

      chromaX += (targetChromaX - chromaX) * ease;
      if (Math.abs(chromaX) > 0.5) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(cx, cy, cw, ch);
        ctx.clip();
        ctx.globalCompositeOperation = "screen";
        ctx.globalAlpha = 0.35;
        ctx.drawImage(img, -chromaX, 0, w, h);
        ctx.drawImage(img, chromaX, 0, w, h);
        ctx.globalAlpha = 1;
        ctx.restore();
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => (hoveringRef.current = true)}
      onMouseLeave={() => (hoveringRef.current = false)}
    >
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className="object-cover"
        draggable={false}
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}
export default GlitchImage;
