export type BlogInline =
  | { type: "text"; value: string }
  | { type: "link"; text: string; href: string };

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "paragraph"; segments: BlogInline[] }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "table";
      columnLabels?: [string, string];
      rows: { function: string; description: string }[];
    }
  | {
      type: "advantages-section";
      heading: string;
      paragraphs: { lead: string; text: string }[];
    }
  | {
      type: "examples-section";
      heading: string;
      intro: string;
      items: { name: string; description: string }[];
      paragraphs: string[];
    };
