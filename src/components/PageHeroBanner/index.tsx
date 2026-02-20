"use client";

import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroBannerProps {
  title: string;
  backgroundImage: string;
  height?: string;
}

export default function PageHeroBanner({
  title,
  backgroundImage,
  height = "300px",
}: PageHeroBannerProps) {
  const pathname = usePathname();

  // Build breadcrumb from the current URL path
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...pathSegments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: "/" + pathSegments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <div className={`relative w-full mt-[54px]`} style={{ height }}>
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover object-center -z-10"
        priority
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)",
        }}
      />
      <SectionContainer className="py-[15px] h-full flex flex-col justify-between">
        <Navbar />
        <div className="z-10 mb-10">
          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight text-white text-center">
            {title}
          </h1>
          <p className="text-center text-white/80 mt-2">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <Link href={crumb.href} className="hover:text-white transition">
                      {crumb.label}
                    </Link>
                    <span className="mx-1">»</span>
                  </>
                ) : (
                  <span className="text-blue-500">{crumb.label}</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}
