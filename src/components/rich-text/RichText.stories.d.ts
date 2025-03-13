import { StoryObj } from '@storybook/react';
import { RichTextProps } from './richText.interface';

declare const meta: {
    title: string;
    component: ({ content, children, variant, appStoreUrl, googlePlayUrl, className, }: RichTextProps) => import("react/jsx-dev-runtime").JSX.Element | null;
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=RichText.stories.d.ts.map