import { Story, Meta } from '@storybook/react';
import styled, { css } from 'styled-components';
import { Background, BackgroundProps } from './background';

interface BackgroundWrapperInterface {
  width: number;
  height: number;
}

const BackgroundWrapper = styled.div<BackgroundWrapperInterface>`
  ${({ width, height }) =>
    css`
      height: ${height}px;
      width: ${width}px;
    `}
`;

export default {
  component: Background,
  title: 'Background',
} as Meta;

const Template: Story<BackgroundProps & BackgroundWrapperInterface> = (
  args
) => {
  const styledArgs = { width: args.width, height: args.height };
  const backgroundProps: Partial<BackgroundProps & BackgroundWrapperInterface> =
    {
      ...args,
    };
  delete backgroundProps.width;
  delete backgroundProps.height;

  return (
    <BackgroundWrapper {...styledArgs}>
      <Background {...backgroundProps} />
    </BackgroundWrapper>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  height: 300,
  width: 300,
};
