---
name: Serene Clinical Excellence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#1c648e'
  on-secondary: '#ffffff'
  secondary-container: '#90cdfd'
  on-secondary-container: '#025881'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#171c1f'
  on-tertiary-container: '#808488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#cae6ff'
  secondary-fixed-dim: '#90cdfd'
  on-secondary-fixed: '#001e30'
  on-secondary-fixed-variant: '#004b70'
  tertiary-fixed: '#dfe3e7'
  tertiary-fixed-dim: '#c3c7cb'
  on-tertiary-fixed: '#171c1f'
  on-tertiary-fixed-variant: '#43474b'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 80px
---

## Brand & Style

The design system is anchored in the intersection of clinical authority and empathetic serenity. It is designed for Dr. Krithishree's psychiatric practice, targeting individuals seeking mental health support who require a digital environment that feels stable, professional, and profoundly calm.

The visual style follows a **Modern Corporate** aesthetic with a lean toward **Minimalism**. It prioritizes clarity and cognitive ease, removing unnecessary decorative elements that might cause overwhelm. The interface should feel like a deep breath—spacious, organized, and intentional. By balancing high-contrast typography with soft, organic UI shapes, the system conveys both the rigorous science of psychiatry and the warmth of human connection.

## Colors

The palette is professional and cooling, designed to lower the user's heart rate through visual harmony.

*   **Primary (Deep Navy):** Used for headings, primary buttons, and navigational anchors to establish authority and trust.
*   **Secondary (Sky Blue):** Used for interactive elements, highlights, and subtle accents to provide a sense of hope and openness.
*   **Neutral (Crisp White & Soft Slate):** The primary canvas color is pure white, supported by a very pale blue-grey (tertiary) for section backgrounds and container fills.
*   **Success/Alert:** Use muted greens and soft ambers only when necessary, ensuring they do not disrupt the overall blue-tonal harmony.

## Typography

Typography in this design system uses a dual-font strategy to balance Dr. Krithishree’s credentials with a welcoming presence.

*   **Headlines:** **Playfair Display** is utilized for all major titles. Its high-contrast strokes and elegant serifs provide an editorial, sophisticated feel that signals expertise.
*   **Body & UI:** **Inter** is the workhorse for all functional text. It is highly legible, even at small sizes, ensuring that clinical information is easily digestible.
*   **Hierarchy:** Maintain a clear distinction between the serif headlines and sans-serif body. Use generous line height (1.6x) for body text to improve readability for users who may be experiencing stress or anxiety.

## Layout & Spacing

The design system employs a **Fixed Grid** layout for desktop to maintain a contained, secure feeling, and a fluid 4-column grid for mobile.

*   **Rhythm:** An 8px base unit drives all spacing. Consistent use of large vertical gaps (section-padding) between content blocks prevents visual clutter.
*   **Whitespace:** Whitespace is treated as a functional element rather than empty space. It is used to isolate key messages and allow the user to focus on one thought at a time.
*   **Desktop:** 12-column grid with a maximum width of 1200px to ensure line lengths remain readable.
*   **Mobile:** Elements should stack vertically with a minimum side margin of 20px to ensure the interface doesn't feel cramped on smaller devices.

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with **Ambient Shadows** to create a soft, non-intimidating sense of depth.

*   **Shadows:** Avoid harsh, dark shadows. Use extremely diffused, low-opacity shadows (e.g., `rgba(10, 25, 47, 0.05)`) with a high blur radius. This creates a "floating" effect for cards that feels gentle.
*   **Surfaces:** The base layer is white. Secondary surfaces (like sidebars or background sections) use the tertiary sky-blue tint.
*   **Interaction:** On hover, elements should subtly lift (shadow deepens slightly) rather than change color aggressively, maintaining the serene atmosphere.

## Shapes

The shape language is defined by **Rounded** geometry to eliminate the "sharpness" often associated with clinical or institutional software.

*   **Buttons & Inputs:** Use a 0.5rem (8px) radius as the default.
*   **Cards & Modals:** Use `rounded-xl` (1.5rem / 24px) to create a soft, container-like feel that "hugs" the content.
*   **Iconography:** Icons should be line-based with rounded caps and joins, avoiding heavy fills or jagged edges.

## Components

*   **Buttons:** Primary buttons use the Deep Navy background with white text. Secondary buttons use a ghost style with a Sky Blue border. All buttons feature generous internal padding and 8px rounded corners.
*   **Input Fields:** Use a soft tertiary background color rather than a white fill to make them feel less like "forms" and more like "spaces for thought." Focus states are indicated by a subtle Sky Blue glow.
*   **Cards:** Employ cards for patient testimonials, service descriptions, or blog posts. Cards should have a white background, a very soft ambient shadow, and 24px internal padding.
*   **Chips:** Used for categorizing treatment areas (e.g., "Anxiety," "Depression"). These should be pill-shaped with a light Sky Blue background and Deep Navy text.
*   **Imagery Treatment:** All photography should have a slight cool-toned overlay or be color-graded to sit harmoniously within the navy and sky-blue palette. Focus on natural light and soft-focus backgrounds.
*   **Progress Indicators:** For intake forms, use a soft, linear progress bar in Sky Blue to provide a sense of journey and completion without inducing stress.