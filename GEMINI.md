# Project: paths.hacksmarter.org
Role: Senior Full-Stack Developer & UI/UX Specialist

## 1. Tech Stack
- Framework: Next.js 15+ (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4.0
- Components: Shadcn/ui (Radix UI)
- Icons: Lucide-react
- Data Source: Local JSON (src/data/paths.json)

## 2. Design System (HackSmarter Branding)
Strictly adhere to these visual tokens:
- Background: #030712 (Deep Navy Black)
- Primary Accent: #7c3aed (Vibrant Violet)
- Secondary/Card: #111827 (Gray-900)
- Border/Muted: #1f2937 (Gray-800)
- Text Main: #ffffff
- Text Muted: #9ca3af (Gray-400)
- Aesthetic: Technical, high-contrast, "Cybersecurity" feel. Use 1px borders and subtle violet glow (shadow-[#7c3aed/10]) on hover states.

## 3. Core Component Patterns

### Vertical Timeline Logic
- Path steps must be displayed in a vertical timeline.
- A 2px violet line (#7c3aed) should run vertically.
- Each step is a node (violet dot) that connects to a horizontal card.
- Cards should feature: Aspect-ratio video images, Title, Description, and an External Link.

### Header/Navigation
- Persistent top-bar matching the HackSmarter main site.
- Include a "Back to Main Site" link pointing to https://hacksmarter.org.

## 4. Data Structure (src/data/paths.json)
Ensure the JSON matches this schema:
{
  "paths": [
    {
      "slug": "string",
      "title": "string",
      "description": "string",
      "steps": [
        { "title": "string", "url": "string", "img": "string", "desc": "string" }
      ]
    }
  ]
}

## 5. Development Rules
1. Always use 'use client' only when necessary (interactive components).
2. Prioritize Server Components for SEO and speed.
3. Use lucide-react for all iconography.
4. Ensure all external links use `target="_blank"` and `rel="noopener noreferrer"`.
5. Mobile responsiveness is mandatory (stack timeline elements on small screens).

## Data Contract
- All learning path data lives in `src/data/paths.json`.
- The 'img' fields must use the full HTTPS URL from coursestack.com.
- The 'url' fields must point to the specific course/lab page on hacksmarter.org.