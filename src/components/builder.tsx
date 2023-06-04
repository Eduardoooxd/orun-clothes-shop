'use client';
import { BUILDER_IO_API_KEY } from '@/config/builderIO';
import { Locale } from '@/config/i18nConfig';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { builder } from '@builder.io/sdk';
import DefaultErrorPage from 'next/error';

interface BuilderPageProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any;
    model?: string;
    locale?: Locale;
}
builder.init(BUILDER_IO_API_KEY);

export function RenderBuilderContent({ content, model = 'page', locale = 'pt' }: BuilderPageProps) {
    const isPreviewing = useIsPreviewing();
    // If `content` has a value or the page is being previewed in Builder,
    // render the BuilderComponent with the specified content and model props.
    if (content || isPreviewing) {
        return <BuilderComponent content={content} model={model} />;
    }
    // If the `content` is falsy and the page is
    // not being previewed in Builder, render the
    // DefaultErrorPage with a 404.
    return <DefaultErrorPage statusCode={404} />;
}
