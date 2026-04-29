---
name: Rural Modernity
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#424844'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#765749'
  on-secondary: '#ffffff'
  secondary-container: '#fed4c2'
  on-secondary-container: '#795a4c'
  tertiary: '#2b2c29'
  on-tertiary: '#ffffff'
  tertiary-container: '#41423f'
  on-tertiary-container: '#afaeaa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#e6bead'
  on-secondary-fixed: '#2c160b'
  on-secondary-fixed-variant: '#5c4033'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-lg:
    fontFamily: Work Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Work Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
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
  margin-page: 32px
  gutter: 24px
  padding-card: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built for the modern steward of the land. It balances the high-stakes precision of livestock health monitoring with the quiet, dependable nature of rural life. The personality is grounded, reliable, and approachable, avoiding the coldness of traditional "Silicon Valley" aesthetics in favor of something that feels like an essential piece of farm equipment.

The chosen style is **Modern Minimalism with Tactile accents**. It prioritizes clarity and whitespace to reduce cognitive load for users who may be operating in high-stress outdoor environments. By using organic color palettes and soft, natural shadows, the interface feels less like a computer screen and more like a natural extension of the farm’s ecosystem.

## Colors

The color palette is derived directly from the landscape. The primary **Deep Forest Green** represents health, growth, and the vitality of the herd. The **Soil Brown** is used for secondary accents and structural elements, providing a sense of stability and earth-rooted reliability. 

The background is a **Warm Cream White**, which reduces eye strain compared to pure white and provides a welcoming, "paper-like" surface for data. For status indicators, we avoid neon tones, opting instead for sun-baked terracotta reds and harvest-gold yellows to signal alerts and warnings without creating unnecessary panic.

## Typography

This design system utilizes **Work Sans** for all levels of information. Chosen for its exceptional legibility and "no-nonsense" character, it performs well both on mobile devices in the field and on desktop monitors in the office. 

Typography scales are intentionally larger than standard software defaults. This ensures that critical health data can be read at a glance, even in bright sunlight or by users who prefer high-visibility text. Headlines are bold and authoritative, while body text maintains generous line spacing to ensure every report and observation is clear and easy to digest.

## Layout & Spacing

The layout follows a **Fluid Grid** model with high-density margins to create a sense of focus. Information is organized into logical "paddocks"—clear, contained areas that prevent the screen from feeling cluttered. 

A strict 8px rhythm governs all spacing, ensuring a consistent visual beat. We prioritize vertical stacking for mobile ease-of-use, while the desktop view uses a 12-column grid with wide gutters. This "breathable" layout ensures that the user's attention is never pulled in too many directions at once, mirroring the wide-open spaces of the rural environment.

## Elevation & Depth

To maintain a grounded feel, this design system uses **Tonal Layers and Ambient Shadows**. Rather than floating elements on high-contrast shadows, we use very soft, low-opacity shadows with a slight brown tint. This mimics the way natural light hits a flat surface, creating a subtle lift that distinguishes interactive cards from the cream background.

Depth is used sparingly to indicate hierarchy:
- **Surface:** The main cream-colored background.
- **Level 1:** White cards with soft shadows for main data points (herd statistics, individual health).
- **Level 2:** Slight tonal shifts or inner shadows for input fields and toggles, making them feel "pressed" into the interface.

## Shapes

The shape language of this design system is defined by **Rounded** corners. We avoid sharp, aggressive angles, opting instead for 0.5rem (8px) corners on standard components and 1rem (16px) on large containers.

This roundedness makes the software feel more organic and less like a technical spreadsheet. It echoes the shapes found in nature—hills, stones, and the animals themselves—reinforcing the brand's commitment to a gentle, respectful approach to livestock management.

## Components

### Buttons
Buttons are solid, high-contrast blocks with large tap targets (minimum 48px height). The primary action uses the Forest Green background with Cream text, ensuring maximum visibility. Secondary actions use the Soil Brown outline.

### Cards
Cards are the primary container for information. They feature a white background, soft rounded corners, and a 24px internal padding. They should be used to group related health metrics, such as "Vital Signs" or "Feeding History."

### Status Chips
Instead of technical codes, we use simple, descriptive status chips. A "Healthy" chip uses a soft sage green background, while "Needs Attention" uses a warm terracotta. These use semi-bold text for immediate recognition.

### Input Fields
Inputs are large and easy to interact with on tablets or phones. They use a subtle border in Soil Brown and a clear, descriptive label above the field to ensure the user always knows what information is being requested.

### Health Charts
Charts should avoid thin lines. Use thick, soft-edged bars or areas with earthy color fills. Data points should be large and easy to tap to reveal more detail.

### Navigation
The navigation uses simple, clear icons paired with large text labels. Avoid abstract symbols; use literal icons that represent the farm (e.g., a cow icon for "Herd," a barn for "Facilities").