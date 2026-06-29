import { Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import type { BlogContentBlock, BlogInline, BlogPostDetail } from "@/data/blog-data";
import { openCalBookingTab } from "@/lib/cal";

function BlogInlineContent({ segments }: { segments: BlogInline[] }) {
  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === "text") {
          return <span key={index}>{segment.value}</span>;
        }

        if (segment.type === "link") {
          const className =
            "font-semibold text-ink underline decoration-ink underline-offset-2 transition hover:text-[#418ed6] hover:decoration-[#418ed6]";

          if (segment.href.startsWith("http")) {
            return (
              <a
                key={index}
                href={segment.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {segment.text}
              </a>
            );
          }

          return (
            <Link key={index} to={segment.href} className={className}>
              {segment.text}
            </Link>
          );
        }
      })}
    </>
  );
}

function BlogContentTable({
  rows,
  columnLabels = ["Function", "What It Handles"],
}: {
  rows: { function: string; description: string }[];
  columnLabels?: [string, string];
}) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse border border-[#E5E7EB] text-left text-[15px] leading-[1.65] text-ink">
        <thead>
          <tr className="bg-[#F3F4F6]">
            <th className="border border-[#E5E7EB] px-4 py-3 font-semibold text-ink md:px-5 md:py-3.5">
              {columnLabels[0]}
            </th>
            <th className="border border-[#E5E7EB] px-4 py-3 font-semibold text-ink md:px-5 md:py-3.5">
              {columnLabels[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.function}>
              <td className="border border-[#E5E7EB] px-4 py-3 align-top font-semibold text-ink md:px-5 md:py-3.5">
                {row.function}
              </td>
              <td className="border border-[#E5E7EB] px-4 py-3 align-top text-ink md:px-5 md:py-3.5">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlogAdvantagesSection({
  heading,
  image,
  paragraphs,
}: {
  heading: string;
  image: string;
  paragraphs: { lead: string; text: string }[];
}) {
  return (
    <section className="mt-10 md:mt-12">
      <h2 className="text-[24px] font-bold leading-snug text-ink md:text-[28px]">{heading}</h2>
      <div className="mt-6 overflow-hidden rounded-2xl md:mt-8">
        <img src={image} alt="" className="aspect-[16/8] w-full object-cover" />
      </div>
      <div className="mt-8 space-y-5 md:mt-10">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.lead}
            className="text-[16px] leading-[1.85] text-ink md:text-[17px]"
          >
            <span className="font-bold">{paragraph.lead}</span> {paragraph.text}
          </p>
        ))}
      </div>
    </section>
  );
}

function BlogExamplesSection({
  heading,
  intro,
  items,
  paragraphs,
}: {
  heading: string;
  intro: string;
  items: { name: string; description: string }[];
  paragraphs: string[];
}) {
  return (
    <section className="mt-10 md:mt-12">
      <h2 className="text-[20px] font-bold uppercase tracking-wide text-ink md:text-[22px]">
        {heading}
      </h2>
      <p className="mt-5 text-[16px] leading-[1.85] text-ink md:text-[17px]">{intro}</p>
      <ul className="mt-5 list-disc space-y-3 pl-6 text-[16px] leading-[1.85] text-ink md:text-[17px]">
        {items.map((item) => (
          <li key={item.name}>
            <span className="font-bold">{item.name}</span> — {item.description}
          </li>
        ))}
      </ul>
      <div className="mt-5 space-y-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[16px] leading-[1.85] text-ink md:text-[17px]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function BlogDetailActions() {
  return (
    <>
      <div className="mt-14 flex flex-wrap items-center justify-center gap-4 md:mt-16">
        <button type="button" onClick={openCalBookingTab} className="btn-brand px-8 py-3.5">
          Book a free call
        </button>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center justify-center rounded-full border-2 border-brand px-8 py-3.5 text-sm font-bold text-brand transition hover:bg-brand/5"
        >
          Request a query
        </Link>
      </div>

      <div className="mt-10 rounded-2xl bg-[#418ED6]/10 px-6 py-8 text-center md:mt-12 md:px-10 md:py-10">
        <p className="text-[18px] font-bold text-ink md:text-[20px]">
          Ready to estimate your app cost?
        </p>
        <Link
          to="/app-cost-calculator"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#418ED6] px-8 py-3.5 text-sm font-bold text-white transition hover:brightness-105"
        >
          Calculate Your App Cost
        </Link>
      </div>
    </>
  );
}

function BlogContent({
  blocks,
  contentImage,
}: {
  blocks: BlogContentBlock[];
  contentImage: string;
}) {
  return (
    <div className="mt-10 md:mt-12">
      {blocks.map((block, index) => {
        if (block.type === "paragraph" && "text" in block) {
          return (
            <p
              key={index}
              className="text-[16px] leading-[1.85] text-ink md:text-[17px] [&+p]:mt-5"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "paragraph" && "segments" in block) {
          return (
            <p
              key={index}
              className="text-[16px] leading-[1.85] text-ink md:text-[17px] [&+p]:mt-5"
            >
              <BlogInlineContent segments={block.segments} />
            </p>
          );
        }

        if (block.type === "heading" && block.level === 2) {
          return (
            <h2
              key={index}
              className="mt-10 text-[24px] font-bold leading-snug text-ink md:mt-12 md:text-[28px]"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "heading" && block.level === 3) {
          return (
            <h3
              key={index}
              className="mt-8 text-[20px] font-bold leading-snug text-ink md:mt-10 md:text-[22px]"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={index}
              className="mt-5 list-disc space-y-3 pl-6 text-[16px] leading-[1.85] text-ink md:text-[17px]"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "table") {
          return (
            <BlogContentTable
              key={index}
              rows={block.rows}
              columnLabels={block.columnLabels}
            />
          );
        }

        if (block.type === "advantages-section") {
          return (
            <BlogAdvantagesSection
              key={index}
              heading={block.heading}
              image={contentImage}
              paragraphs={block.paragraphs}
            />
          );
        }

        if (block.type === "examples-section") {
          return (
            <BlogExamplesSection
              key={index}
              heading={block.heading}
              intro={block.intro}
              items={block.items}
              paragraphs={block.paragraphs}
            />
          );
        }

        return null;
      })}
    </div>
  );
}

export function BlogDetailPage({ post }: { post: BlogPostDetail }) {
  return (
    <article className="pb-16 md:pb-24">
      <div className="container-narrow pt-8 md:pt-10">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft transition hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <h1 className="mt-6 max-w-4xl text-[34px] font-bold leading-[1.15] tracking-tight text-ink md:mt-8 md:text-[44px]">
          {post.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-soft md:mt-6 md:text-[14px]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 shrink-0" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            {post.readTime}
          </span>
          {post.author ? <span>By {post.author}</span> : null}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl md:mt-10">
          <img
            src={post.image}
            alt=""
            className="aspect-[16/8] w-full object-cover"
          />
        </div>

        <BlogContent blocks={post.content} contentImage={post.contentImage} />
        <BlogDetailActions />
      </div>
    </article>
  );
}

export function BlogNotFound() {
  return (
    <section className="container-page py-20 md:py-28">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to blog
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-ink md:text-4xl">Blog not found</h1>
      <p className="mt-3 max-w-lg text-sm text-ink-soft md:text-base">
        The article you are looking for does not exist or may have been moved.
      </p>
      <Link to="/blog" className="btn-primary mt-8">
        View all articles
      </Link>
    </section>
  );
}
