import { MouseEvent, ReactElement } from 'react';
import { TableColumn } from '@zepdev/design-system-component-library-react';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { GlobalVariants } from '../../interfaces/global-variants';
import { HeaderLongProps } from '../header-long';
import { AccordionContent } from '../accrodion-pattern';

export interface AccordionProps {
    contents: AccordionContent[];
}
export interface TableProps {
    columns: TableColumn<object>[];
    dataSource: object[];
}
export interface RichTextProps {
    content: BlocksContent;
}
export interface THContext {
    buttonOnClick: (ev: MouseEvent<HTMLElement>) => void;
    buttonText: string;
    message: string;
    variant: GlobalVariants;
}
export interface TextHighlightProps extends Partial<Omit<HeaderLongProps, 'variant'>>, Omit<THContext, 'variant'> {
    children: ReactElement<AccordionProps> | ReactElement<TableProps> | ReactElement<RichTextProps>;
    imageSrc: string;
    imageAlt: string;
    variant?: GlobalVariants;
    imageAlignment?: 'left' | 'right';
}
//# sourceMappingURL=TextHighlight.interface.d.ts.map