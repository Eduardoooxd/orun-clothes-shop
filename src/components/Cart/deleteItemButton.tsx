import { CartItem } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';
import CloseIcon from '../Icons/close';
import LoadingDots from '../Icons/loadingDots';

interface DeleteItemButtonProps {
    item: CartItem;
}

export default function DeleteItemButton({ item }: DeleteItemButtonProps) {
    const router = useRouter();
    const [removing, setRemoving] = useState(false);

    async function handleRemove() {
        setRemoving(true);

        const response = await fetch(`/api/cart`, {
            method: 'DELETE',
            body: JSON.stringify({
                lineId: item.id,
            }),
        });
        const data = await response.json();

        if (data.error) {
            alert(data.error);
            return;
        }

        setRemoving(false);

        startTransition(() => {
            router.refresh();
        });
    }
    return (
        <button
            aria-label="Remove cart item"
            onClick={handleRemove}
            disabled={removing}
            className={cn(
                'ease flex min-w-[36px] max-w-[36px] items-center justify-center border px-2 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900',
                {
                    'cursor-not-allowed px-0': removing,
                }
            )}
        >
            {removing ? (
                <LoadingDots className="bg-black dark:bg-white" />
            ) : (
                <CloseIcon className="mx-[1px] h-4 w-4" />
            )}
        </button>
    );
}
