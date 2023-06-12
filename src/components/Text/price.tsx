import { futuraPTLight } from '@/lib/fontLoader';
import { cn } from '@/lib/utils';

const Price = ({
    amount,
    currencyCode = 'EUR',
    ...props
}: {
    amount: string;
    currencyCode: string;
} & React.ComponentProps<'p'>) => (
    <p
        suppressHydrationWarning={true}
        className={cn('font-bold uppercase', `${futuraPTLight.variable} font-futuraPTLight`)}
        {...props}
    >
        {`${new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: currencyCode,
            currencyDisplay: 'narrowSymbol',
        }).format(parseFloat(amount))} ${currencyCode}`}
    </p>
);

export default Price;
