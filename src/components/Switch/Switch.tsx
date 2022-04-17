import { Flex } from "@rebass/grid"
import * as React from "react"
import { ReactNode, useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { MoonIcon, SunIcon } from "../../icons"

type Props = {
  isChecked: boolean
  ariaLabel: string
  handleToggle: () => void
  ariaHidden?: "true" | "false"
  id?: string
  width?: string
  isCheckedIcon?: ReactNode
  isNotCheckedIcon?: ReactNode
  styles?: React.CSSProperties
}

const Switch = ({
  id,
  width,
  isChecked,
  handleToggle,
  ariaLabel,
  ariaHidden,
  styles,
}: Props) => {
  const componentId = `${id || ""}Switch`
  const theme = useContext(ThemeContext)
  return (
    <Flex style={styles} aria-hidden={ariaHidden}>
      <Input
        id={componentId}
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <Label htmlFor={componentId} width={width}>
        <SwitchButton
          width={width}
          role="button"
          aria-label={ariaLabel}
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleToggle()
            }
          }}
        />
        <IconWrapper isChecked={isChecked}>
          {isChecked && (
            <SunIcon color={theme.colors.backgrounds.pageBackground} />
          )}
          {!isChecked && (
            <MoonIcon color={theme.colors.backgrounds.pageBackground} />
          )}
        </IconWrapper>
      </Label>
    </Flex>
  )
}

const IconWrapper = styled.div<{ isChecked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isChecked }) =>
    isChecked ? "flex-start" : "flex-end"};
  width: 100%;
  margin-left: ${({ isChecked }) => (isChecked ? "2px" : undefined)};
  margin-right: ${({ isChecked }) => (!isChecked ? "2px" : undefined)};
`

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    span {
      left: calc(100% - 2px);
      transform: translate(-100%);
    }
  }
`

const Label = styled.label<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: ${({ width }) => width || "48px"};
  height: ${({ width }) => (width ? `${parseInt(width) / 2}px` : "24px")};
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  transition: background-color 0.5s;
  border-radius: 100px;
`

const SwitchButton = styled.span<{ width?: string }>`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  transition: 0.2s;
  background: white;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  border-radius: 100px;
  height: ${({ width }) => (width ? `${parseInt(width) / 2 - 4}px` : "20px")};
  width: ${({ width }) => (width ? `${parseInt(width) / 2 - 4}px` : "20px")};

  ${Label}:active & {
    width: ${({ width }) => (width ? `${parseInt(width) / 2 + 8}px` : "28px")};
  }
`

export default Switch
