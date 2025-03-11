import { GlobalVariants } from '../../interfaces/global-variants';

export interface CardMediaProps {
    imageSrc: string;
    imageAlt: string;
    imageOrientation?: 'vertical' | 'horizontal';
    headline: string;
    description: string;
    linkText: string;
    linkSrc: string;
    linkType?: 'internal-link' | 'external-link' | 'download';
    variant?: GlobalVariants;
    className?: string;
}
//# sourceMappingURL=cardmedia.interface.d.ts.map