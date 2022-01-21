import { ComponentMeta, ComponentStory } from "@storybook/react";
import User from "./User";

export default{
    title:'Atoms/User',
    component:User,
}as ComponentMeta<typeof User>;

const Template:ComponentStory<typeof User>= (args) => <User {...args} />

export const DefaultUser= Template.bind({});
DefaultUser.args={
    username:'B'
};