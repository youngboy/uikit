import 'jest-styled-components'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import { alignSelf } from 'styled-system'

import {
  Base,
  AllStyle,
  Box,
  Compose,
  Flex,
  Position,
  Relative,
  Absolute,
  Fixed,
  Sticky
} from '../src/index'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('Base', () => {
  test('Base renders', () => {
    const json = renderJSON(
      <Base css='display: none;' />
    )
    expect(json).toHaveStyleRule('display', 'none')
  })

  test('Allstyle renders', () => {
    const json = renderJSON(
      <AllStyle m='1px' css='display: none;' />
    )
    expect(json).toHaveStyleRule('display', 'none')
    expect(json).toHaveStyleRule('margin', '1px')
  })
})

describe('Box', () => {
  test('Box renders', () => {
    const json = renderJSON(
      <Box />
    )
    expect(json.type).toBe('div')
  })

  test('renders with as prop', () => {
    const json = renderJSON(
      <Box as='header' />
    )
    expect(json.type).toBe('header')
  })

  test('renders with css props', () => {
    const json = renderJSON(
      <Box css='display: none;' />
    )
    expect(json).toHaveStyleRule('display', 'none')
  })

  test('renders with style props', () => {
    const json = renderJSON(
      <Box width={1} />
    )
    expect(json).toHaveStyleRule('width', '100%')
  })

  // sorry, clean-tag implementations don't work well with SC `as` prop
  test('removes style props from html', () => {
    const json = renderJSON(
      <Box
        width={1}
        fontSize={3}
        color='blue'
        bg='tomato'
        css={{}}
      />
    )
    expect(json.props.width).toBeUndefined()
    expect(json.props.fontSize).toBeUndefined()
    expect(json.props.color).toBeUndefined()
    expect(json.props.bg).toBeUndefined()
    expect(json.props.css).toBeUndefined()
  })
})

// Still complicate API, need to consider better solution
describe('Compose', () => {
  test('Compose renders', () => {
    const json = renderJSON(
      <Compose from={[alignSelf]}
               alignSelf='start'
               m='2px' />
    )
    expect(json).toHaveStyleRule('align-self', 'start')
    expect(json).toHaveStyleRule('margin', '2px')
  })

  test('Compose another styled component', () => {
    const json = renderJSON(
      <Compose from={[alignSelf]}
               alignSelf='start'
               as={Absolute} />
    )
    expect(json).toHaveStyleRule('align-self', 'start')
    expect(json).toHaveStyleRule('position', 'absolute')
  })
})

describe('Flex', () => {
  test('Flex renders', () => {
    const json = renderJSON(
      <Flex />
    )
    expect(json.type).toBe('div')
  })

  test('renders with flex props', () => {
    const json = renderJSON(
      <Flex alignItems='center' />
    )
    expect(json).toHaveStyleRule('display', 'flex')
    expect(json).toHaveStyleRule('align-items', 'center')
  })

  test('renders with Box props', () => {
    const json = renderJSON(
      <Flex color='tomato' />
    )
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('renders with as and Box props', () => {
    const json = renderJSON(
      <Flex as='footer' color='tomato' bg='red' />
    )
    expect(json.type).toBe('footer')
    expect(json).toHaveStyleRule('color', 'tomato')
  })
})

describe('Position', () => {
  test('Position renders', () => {
    const json = renderJSON(
      <Position
        position='fixed'
        top='0'
        right='0'
        bottom='0'
        left='0'
        zIndex='1'
      />
    )
    expect(json).toHaveStyleRule('position', 'fixed')
    expect(json).toHaveStyleRule('z-index', '1')
    expect(json).toHaveStyleRule('top', '0')
    expect(json).toHaveStyleRule('right', '0')
    expect(json).toHaveStyleRule('bottom', '0')
    expect(json).toHaveStyleRule('left', '0')
  })

  test('Relative renders', () => {
    const json = renderJSON(
      <Relative />
    )
    expect(json).toHaveStyleRule('position', 'relative')
  })

  test('Absolute renders', () => {
    const json = renderJSON(
      <Absolute />
    )
    expect(json).toHaveStyleRule('position', 'absolute')
  })

  test('Fixed renders', () => {
    const json = renderJSON(
      <Fixed />
    )
    expect(json).toHaveStyleRule('position', 'fixed')
  })

  test('Sticky renders', () => {
    const json = renderJSON(
      <Sticky />
    )
    expect(json).toHaveStyleRule('position', 'sticky')
  })
})


