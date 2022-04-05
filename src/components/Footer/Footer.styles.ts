import styled from "styled-components"
import { FadeInSection } from "../StyledComponents"

export const StyledFooter = styled(FadeInSection)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  text-align: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacers.size32}
    ${({ theme }) => theme.spacers.size16};
  gap: ${({ theme }) => theme.spacers.size20};
`
