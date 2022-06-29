import  { IconAndText, IconAndTextProps } from ".";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Entreprenuer } from "../../../images/entreprenuer.svg";
import { Story } from "@storybook/react";

export default {
  title: "Molecules/Icon And Text",
  component: IconAndText,
}

const Template: Story<IconAndTextProps> = args => <IconAndText {...args} />

export const TimeIcon = Template.bind({});
TimeIcon.args = {
  iconSource: <Time />,
  variant: "caption",
  title: "13-min read",
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  iconSource: <User />,
  variant: "caption",
  title: "1.9k reads",
};

export const EntrepreneurIcon = Template.bind({});
EntrepreneurIcon.args = {
  iconSource: <Entreprenuer />,
  variant: "body1",
  title: "Entreprenuership",
};