# Design System Document

## 1. Overview & Creative North Star: "The Sacred Breath"
This design system is built upon the concept of **"The Sacred Breath"**—a digital philosophy that prioritizes stillness, intentionality, and rhythmic flow. We are moving away from the "standard" religious portal template (cluttered, gold-gradient heavy, and rigid) in favor of a high-end editorial experience that feels as serene as a prayer hall at dawn.

**The Creative North Star** dictates that every pixel must serve a spiritual purpose. We break the traditional grid through:
*   **Intentional Asymmetry:** Using whitespace as a structural element rather than a "gap" to be filled.
*   **Layered Translucency:** Representing the spiritual veil through glassmorphism and soft tonal stacking.
*   **Typographic Authority:** Using dramatic scale shifts between Noto Serif and Plus Jakarta Sans to create a sense of timeless wisdom meeting modern clarity.

---

## 2. Colors: Tonal Atmosphere
The palette is rooted in nature and tradition, reimagined for a high-end digital interface. 

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be invisible. Use background color shifts (e.g., a `surface-container-low` section transitioning into `surface`) or ample padding to define structural change.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of fine paper.
*   **Base:** `surface` (#faf9f6) acts as our "Canvas."
*   **Layer 1:** Use `surface-container-low` (#f4f3f1) for large sectioning.
*   **Layer 2 (The "Floating" Layer):** Use `surface-container-lowest` (#ffffff) for cards or interactive elements to create a natural, soft lift.

### Signature Textures
*   **The Muted Teal Glow:** For primary CTAs, use a subtle vertical gradient from `primary` (#286064) to `primary_container` (#43797d). This provides a "soul" to the action button that a flat color lacks.
*   **Gold Accents:** Reserve `tertiary` (#715413) and its variants for micro-interactions (hover states, active icons, or subtle geometric pattern lines).

---

## 3. Typography: The Editorial Voice
Our typography pairing balances the "Ancient" (Serif) with the "Eternal" (Sans-Serif).

*   **The Heroic Voice (Display & Headline):** `notoSerif` is our anchor. Use `display-lg` for impactful Quranic verses or welcome statements. The high-contrast serif evokes the prestige of traditional calligraphy without the clutter.
*   **The Guidance Voice (Title & Label):** `plusJakartaSans` provides a crisp, modern counterpoint. It ensures that functional information (prayer times, event dates) is processed with zero friction.
*   **Hierarchy Note:** To achieve a premium feel, increase letter-spacing on `label-sm` and `label-md` by 5-8% to create a "breathable" luxury aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
We avoid the "pasted-on" look of traditional shadows. Depth in this system is organic.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-highest` (#e3e2e0) element behind a `surface-container-lowest` (#ffffff) card. The contrast in tone creates depth naturally.
*   **Ambient Shadows:** When a "floating" effect is mandatory (e.g., a prayer time modal), use an ultra-diffused shadow:
    *   *Blur:* 40px - 60px
    *   *Color:* `on_surface` (#1a1c1a) at 4% opacity.
*   **Glassmorphism:** For top navigation bars or floating action buttons, use `surface` (#faf9f6) at 80% opacity with a `backdrop-filter: blur(20px)`. This allows the "Sacred Breath" of the background imagery to bleed through.
*   **The Ghost Border:** If accessibility requires a border, use `outline_variant` (#bfc8c9) at 15% opacity. Never use a 100% opaque border.

---

## 5. Components: Modern Islamic Minimal

### Cards & Collections
*   **Forbid Dividers:** Do not use horizontal lines to separate list items. Use 32px–48px of vertical whitespace or a subtle `surface_variant` hover state to define rows.
*   **Roundedness:** All cards must use `xl` (1.5rem) or `lg` (1rem) corner radii to evoke a soft, welcoming environment.

### Buttons (The "Benawf" Button)
*   **Primary:** Gradient of `primary` to `primary_container`. Text: `on_primary`. Shape: `full` (pill-shaped) to match the soft Islamic geometry.
*   **Secondary:** `surface_container_high` background with `primary` text. No border.
*   **Tertiary:** Transparent background with `tertiary` (Gold) text. Use for less critical actions like "View More."

### Input Fields
*   **Style:** Minimalist. Use `surface_container` as the background. On focus, transition the background to `surface_container_lowest` and apply a 1px `primary` ghost border (20% opacity).

### Prayer Time Display (Custom Component)
*   Do not use a table. Use a series of `surface-container-low` tiles with `notoSerif` for the time and `plusJakartaSans` (label-md) for the prayer name. The "Current Prayer" should be highlighted using a `tertiary_container` (Gold) soft glow.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. For example, a heading might be indented 15% while the body text remains centered.
*   **Do** use subtle geometric patterns (8-point stars) as `outline_variant` watermarks (5% opacity) in the background of sections.
*   **Do** prioritize high-quality, desaturated photography of the Masjid’s architectural details.

### Don’t:
*   **Don't** use black (#000000). Use `charcoal` (`on_surface`) for all text to keep the "Calm" personality.
*   **Don't** use harsh 90-degree corners. Everything should feel hand-smoothed.
*   **Don't** use standard "Material Design" blue or red for success/error if possible—tint them toward our `primary` teal or `error` muted red to maintain the palette's harmony.

---