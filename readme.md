# Weimi-ui

Weimi-ui is set of react component that highly customize-able

- Theme support, generated from design token
- Compostable with props inherit
- Convenient props accessiable
- Accessiability feature enable

## Getting started

```bash
npm i @weimi/ui
```

```jsx
import { withTheme, GoTheme } from '@weimi/ui/theme'
import { Box } from '@weimi/ui'

const UI = withTheme(GoTheme)

function App() {
  return <UI>
    <Box bg='black' color='white'>Hello world</Box>
  </UI>
}
```


## Primitive

- [x] Base
  - [x] support `css` props
  - [x] integrate clean tag
  - [x] Box --  props: `space, width, fontSize, color`
    - [x] Flex -- props: `flex`
    - [x] Relative -- display: `relative`
    - [x] Fixed -- display: `fixed`
    - [x] Static -- display: `static`
    - [x] Sticky -- display: `sticky`
- [x] AllStyle
- [x] Compose
  - support `from`

## Theme

- [x] Provider
- [x] createTheme
- [x] Choices
- [x] Variant
- [ ] Plugin ecosystem

## Components

- [x] Global
- [x] Link
- [x] Heading
- [x] Button
- [x] Text
- [ ] Card
- [ ] Hide
- [ ] Overlay
- [ ] Backdrop
- [ ] Image
- [ ] Divider

## Interactive

- [ ] Segment
- [ ] Dialog
- [ ] MenuButton

## Demo site

- [x] Editable code sample
- [x] Docs for components
- [x] Typograhpy
- [X] Props table
- [x] Theme selector
- [x] Theme generator
- [x] Styling docs site