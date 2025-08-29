import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string; // Optional, if not provided, item is current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center text-sm text-text2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:opacity-100 transition-colors opacity-50"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text2">{item.label}</span>
              )}

              {!isLast && (
                <span className="mx-3 text-text2 opacity-50">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
