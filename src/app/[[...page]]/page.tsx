import { RenderBuilderContent } from '@/components/builder';
import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import { isDevEnv } from '@/lib/utils';
import { builder } from '@builder.io/sdk';

// Replace with your Public API Key
builder.init(BUILDER_IO_API_KEY);

// Define the expected shape of the props
// object passed to the Page function
interface PageProps {
    params: {
        page: string[];
    };
}

// Async function called Page takes a single
// argument called props of type PageProps
export default async function Page(props: PageProps) {
    const content = isDevEnv()
        ? null
        : await builder
              // Get the page content from Builder with the specified options
              .get('page', {
                  userAttributes: {
                      // Use the page path specified in the URL to fetch the content
                      urlPath: '/' + (props?.params?.page?.join('/') || ''),
                  },
                  // Set prerender to false to prevent infinite rendering loops
                  prerender: false,
              })
              // Convert the result to a promise
              .toPromise();

    return (
        <>
            <section className="relative mt-[-5rem] min-h-screen w-full overflow-x-hidden">
                {isDevEnv() ? null : <RenderBuilderContent content={content} model={'page'} />}
            </section>
        </>
    );
}
