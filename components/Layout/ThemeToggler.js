import React from 'react'
import styled, { withTheme } from 'styled-components'

const ThemeSwicther = styled.button`
  font-size: 13px;
  padding: 0.5rem 1.25rem;
  background-color: pink;
`
const ThemeSwictherButton = ({ toggle, theme }) => <ThemeSwicther onClick={toggle}>{theme.dark ? 'Dark' : 'Light'}</ThemeSwicther>

export default withTheme(ThemeSwictherButton)
