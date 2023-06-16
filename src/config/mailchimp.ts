import * as z from 'zod';

const envSchema = z.object({
    MAILCHIMP_API_KEY: z.string(),
    MAILCHIMP_SERVER_PREFIX: z.string(),
    MAILCHIMP_LIST_ID: z.string(),
});

const envVars = {
    MAILCHIMP_API_KEY: `${process.env.MAILCHIMP_API_KEY}`,
    MAILCHIMP_SERVER_PREFIX: `${process.env.MAILCHIMP_SERVER_PREFIX}`,
    MAILCHIMP_LIST_ID: `${process.env.MAILCHIMP_LIST_ID}`,
};

export const mailChimpEnv = envSchema.parse(envVars);
