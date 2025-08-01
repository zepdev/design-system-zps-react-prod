import { BlocksContent } from '@strapi/blocks-react-renderer';
import { LinkProps } from '@zepdev/design-system-component-library-react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';
import { FunctionalIconNames } from '../../../node_modules/@zepdev/design-system-component-library-react';

export interface LinkListLink extends LinkProps {
    linkType?: 'default' | 'download';
    href?: string;
    icon?: FunctionalIconNames;
    label: string;
}
export interface LinkListItemProps {
    headline?: string;
    description?: BlocksContent;
    links: LinkListLink[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isMultiListItem?: boolean;
    className?: string;
    isFooterList?: boolean;
    gtmId?: string;
    gtmHeadline?: string;
}
//# sourceMappingURL=LinkListItem.interface.d.ts.map