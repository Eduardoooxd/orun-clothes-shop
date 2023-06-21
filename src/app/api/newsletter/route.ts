import { mailChimpEnv } from '@/config/mailchimp';
import * as mailchimp from '@mailchimp/mailchimp_marketing';
import md5 from 'md5';
import { NextResponse } from 'next/server';
import * as z from 'zod';

mailchimp.setConfig({
    apiKey: mailChimpEnv.MAILCHIMP_API_KEY,
    server: mailChimpEnv.MAILCHIMP_SERVER_PREFIX,
});

const LIST_ID = mailChimpEnv.MAILCHIMP_LIST_ID;

const newsletterBodySchema = z.object({
    email: z.string().email(),
    agreeMarketing: z.boolean().refine((data) => data === true),
    firstName: z.string().min(2).max(100).optional(),
    lastName: z.string().min(2).max(100).optional(),
});

type NewsletterBody = z.infer<typeof newsletterBodySchema>;

export async function POST(request: Request): Promise<Response> {
    const body = await request.json();

    const parsedBody = newsletterBodySchema.safeParse(body);
    if (!parsedBody.success) {
        return NextResponse.json({ message: 'Wrong format for body' }, { status: 400 });
    }

    const { email, agreeMarketing, firstName, lastName } = newsletterBodySchema.parse(body);

    try {
        const subscriberHash = md5(email.toLowerCase());

        try {
            //Verify if user already exists in the list
            // I have to use a try catch because the mailchimp api doesn't return a 404 error, instead throws an error,
            await mailchimp.lists.getListMember(LIST_ID, subscriberHash);

            await mailchimp.lists.updateListMember(LIST_ID, subscriberHash, {
                status: agreeMarketing ? 'subscribed' : 'pending',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                },
            });

            return NextResponse.json(
                { message: 'Updated information successfully' },
                { status: 200 }
            );
        } catch (_) {}

        await mailchimp.lists.addListMember(LIST_ID, {
            email_address: email,
            status: agreeMarketing ? 'subscribed' : 'pending',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            },
        });
        return NextResponse.json({ message: 'Subscribed successfully' }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
