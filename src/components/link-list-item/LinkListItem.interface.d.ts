import { LinkProps } from '@zepdev/design-system-component-library-react';
import { GlobalVariantExtended, GlobalVariants } from '../../interfaces/global-variants';

export interface LinkListItemProps {
    headline?: string;
    description?: string;
    links: LinkProps[];
    variant?: GlobalVariants | GlobalVariantExtended;
    isMultiListItem?: boolean;
    className?: string;
    isFooterList?: boolean;
    type?: 'default' | 'download';
}
//# sourceMappingURL=LinkListItem.interface.d.ts.map