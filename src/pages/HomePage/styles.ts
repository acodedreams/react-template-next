import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  color: ${props => props.theme.colors.background}
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 2.4rem;
  color: ${props => props.theme.colors.primary}
`
