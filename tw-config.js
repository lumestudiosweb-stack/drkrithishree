/* Shared Tailwind config — Dr. Krithishree S.S. premium site */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                navy:        "#0d1c32",
                "navy-soft": "#15294a",
                "navy-deep": "#081120",
                blue:        "#1c648e",
                "blue-bright":"#2a82b8",
                sky:         "#90cdfd",
                "sky-soft":  "#cae6ff",
                "sky-pale":  "#eaf4fc",
                surface:     "#f7fafd",
                "surface-2": "#ffffff",
                ink:         "#1a1c1c",
                "ink-soft":  "#44474d",
                line:        "#e3e9f0",
                /* legacy aliases so older markup still resolves */
                "primary": "#0d1c32",
                "primary-container": "#0d1c32",
                "secondary": "#1c648e",
                "on-primary": "#ffffff",
                "on-surface-variant": "#44474d",
                "on-background": "#1a1c1c",
                "surface-bright": "#f7fafd",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#f3f6fa",
                "surface-variant": "#e3e9f0",
                "secondary-fixed": "#cae6ff",
                "secondary-container": "#90cdfd",
                "primary-fixed": "#d6e3ff",
                "primary-fixed-dim": "#b9c7e4"
            },
            fontFamily: {
                display: ["Source Serif 4", "Georgia", "serif"],
                body: ["Inter", "system-ui", "sans-serif"]
            },
            spacing: {
                "section": "clamp(64px, 9vw, 120px)",
                "gutter": "24px",
                "container-max": "1240px",
                "margin-desktop": "64px",
                "margin-mobile": "20px"
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                lg: "1rem",
                xl: "1.5rem",
                "2xl": "2rem",
                full: "9999px"
            },
            maxWidth: {
                "container-max": "1240px"
            },
            boxShadow: {
                soft: "0 2px 10px rgba(13,28,50,.05)",
                mid:  "0 10px 34px rgba(13,28,50,.09)",
                deep: "0 24px 64px rgba(13,28,50,.14)",
                glow: "0 10px 36px rgba(28,100,142,.40)"
            }
        }
    }
};
