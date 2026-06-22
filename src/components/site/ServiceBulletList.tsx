import { cn } from "@/lib/utils";

export type ServiceTextContent = readonly string[];
export type ServiceSectionContent = string | ServiceTextContent;

export function serviceTextToPlainText(content: ServiceSectionContent): string {
  return typeof content === "string" ? content : content.join(" ");
}

export function ServiceBulletList({
  items,
  className,
  itemClassName,
}: {
  items: ServiceTextContent;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={cn("list-disc space-y-2.5 pl-5 marker:text-current", className)}>
      {items.map((item) => (
        <li key={item} className={cn("leading-relaxed", itemClassName)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ServiceSectionBody({
  content,
  className,
  paragraphClassName,
  listClassName,
  itemClassName,
}: {
  content: ServiceSectionContent;
  className?: string;
  paragraphClassName?: string;
  listClassName?: string;
  itemClassName?: string;
}) {
  if (typeof content === "string") {
    const paragraphs = content.split(/\n\n+/).filter(Boolean);

    return (
      <div className={className}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={cn("leading-relaxed", index > 0 && "mt-4", paragraphClassName)}
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  return (
    <ServiceBulletList
      items={content}
      className={listClassName ?? className}
      itemClassName={itemClassName ?? paragraphClassName}
    />
  );
}
