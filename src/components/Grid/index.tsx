import { cn } from '@/lib/utils';

function Grid(props: React.ComponentProps<'ul'>) {
    return (
        <ul {...props} className={cn('grid grid-flow-row  gap-4 py-5', props.className)}>
            {props.children}
        </ul>
    );
}

function GridItem(props: React.ComponentProps<'li'>) {
    return (
        <li
            {...props}
            className={cn(
                'relative aspect-square h-full w-full overflow-hidden transition-opacity',
                props.className
            )}
        >
            {props.children}
        </li>
    );
}

Grid.Item = GridItem;
export default Grid;
