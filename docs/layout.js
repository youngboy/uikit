import React from 'react'
import {
  Pagination,
  ScrollTop,
  ComponentProvider
} from 'mdx-go'
import styled, { ThemeConsumer } from 'styled-components'
// import ReactJson from 'react-json-view'
import ReactJson from './json-view'

import NavLinks, { NavLink } from './NavLinks'
import Layout from './go-layout'
import * as components from '../src'
import {
  withTheme,
  RockTheme,
  GoTheme,
  BlankTheme
} from '../src/theme'
import { get } from '../src/utils'

const ActionRoot = styled('div')({
  marginRight: '1rem',
  display: 'flex',
  marginTop: '20px',
  width: '24rem'
})

const Action = styled(components.Button)({
  flex: '1',
  marginRight: '0.5rem',
})

const nav = [
  'Home',
  'Primitve',
  'Component',
  'Typography',
  'Theme',
]

const themeList = [{
  name: 'Blank',
  value: BlankTheme,
}, {
  name: 'Rock',
  value: RockTheme
}, {
  name: 'Mdx-go',
  value: GoTheme
}]
export class Root extends React.Component {

  state = {
    index: 2,
  }

  onSelectIndex(index) {
    return () => {
      this.setState({ index })
    }
  }


  render() {
    const theme = themeList[this.state.index].value
    const UI = withTheme(theme)
    return (
      <UI>
        <Layout>
          <Layout.NavBar css='justify-content: flex-end;'>
            <ActionRoot>
              {themeList.map((t, i) =>
                <Action onClick={this.onSelectIndex(i)}
                        disabled={i == this.state.index}
                        key={i}>{t.name}
                </Action>
              )}
            </ActionRoot>
          </Layout.NavBar>
          <Layout.MenuToggle />
          <Layout.Sidebar py='48px' bg='navBg'>
            <NavLinks
              filter={route => nav.includes(route.name)}
              order={nav}
            {...this.props} />
            <NavLink
              to='https://github.com/youngboy/weimi-ui'
              children='GitHub'
            />
          </Layout.Sidebar>
          <Layout.Main>
              {this.props.children}
            {/* <Pagination {...this.props} /> */}
          </Layout.Main>
          <ScrollTop />
        </Layout>
      </UI>

    )
  }
}

export const Page = ({ children }) => {
  return <ComponentProvider components={components}>
    {children}
  </ComponentProvider>
}


export const ThemeInfo = ({ name, theme, collapsed=true}) => {
  return <ReactJson
    name={name}
    displayDataTypes={false}
    displayObjectSize={false}
    collapsed={collapsed}
    enableClipboard={false}
    src={theme} />
}

function getStyleProps(src, theme) {
  const themeObject = Object.keys(src.propTypes).reduce((prev, key) => {
    const meta = src.propTypes[key].meta
    if (meta.displayName !== src.displayName) {
      return prev
    }

    const themeKey = meta.themeKey || 'None'
    if (prev.hasOwnProperty(themeKey)) {
      prev[themeKey]['props'].push(meta.prop)
    } else {
      prev[themeKey] = {
        key: themeKey,
        props: [meta.prop],
        choice: get(theme, themeKey)
      }
    }
    return prev
  }, [])
  const themeTable = Object.keys(themeObject).map(k => themeObject[k])
  return <React.Fragment>
    {themeTable.map((p) => <tr key={p.key}>
      <td>{p.key}</td>
      <td>
        <ul style={{marginTop: 0, listStyle: 'none', paddingLeft: 0}} >
          {p.props.map(i => <li key={i}><code>{i}</code></li>)}
        </ul>
      </td>
      <td>
        <ReactJson
            name='chioce'
            displayDataTypes={false}
            displayObjectSize={false}
            collapsed={1}
            enableClipboard={false}
            src={p.choice || {}} />
      </td>
    </tr>)}
  </React.Fragment>
}


export const ComponentDoc = ({ src }) => {
  return <ThemeConsumer>
    {theme => (
      <table>
        <thead>
          <tr>
            <th>Theme Path </th>
            <th>Props list</th>
            <th>Choices</th>
          </tr>
        </thead>
        <tbody>
          {getStyleProps(src, theme)}
        </tbody>
      </table>
    )}
  </ThemeConsumer>
}



function getProps(src, theme) {
  return Object.keys(src.propTypes).reduce((prev, key) => {
    const meta = src.propTypes[key].meta
    if (meta.displayName !== src.displayName) {
      return prev
    }

    prev.push({
      prop: meta.prop,
      key: meta.themeKey || 'None',
      choice: get(theme, meta.themeKey)
    })

    return prev
  }, [])
}

function getRows(src, theme) {
  const props = getProps(src, theme)
  return <React.Fragment>
    {props.map((p) => <tr key={p.key}>
      <td><code>{p.prop}</code></td>
      <td>{p.key}</td>
      <td>
        <ReactJson
          name={p.key.indexOf('.base') > -1 ? 'value' : 'choices'}
          displayDataTypes={false}
          displayObjectSize={false}
          collapsed={1}
          enableClipboard={false}
          src={p.choice} />
      </td>
    </tr>)}
  </React.Fragment>
}

export const PropsTable = ({ src }) => {
  return <ThemeConsumer>
    {theme => (
      <table>
        <thead>
          <tr>
            <th>Props </th>
            <th>Theme Path</th>
            <th>Choices / Value</th>
          </tr>
        </thead>
        <tbody>
          {getRows(src, theme)}
        </tbody>
      </table>
    )}
  </ThemeConsumer>
}