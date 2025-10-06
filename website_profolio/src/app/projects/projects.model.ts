export interface Project {
  id: string;                      // unique slug or uuid
  title: string;
  short: string;                   // short teaser
  long: string;                   // optional long description (for modal)
  tech: string[];                  // e.g., ["Angular","Django","MongoDB"]
  tags?: string[];                 // e.g., ["web","mobile"]
  imageUrl?: string;
  links?: {
    demo?: string;
    repo?: string;
  };
  date?: string;                   // "2025-09" or ISO date
  featured?: boolean;
}