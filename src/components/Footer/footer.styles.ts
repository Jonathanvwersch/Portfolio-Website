import styled from "styled-components"

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  text-align: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacers.size16};
  gap: ${({ theme }) => theme.spacers.size20};
`
