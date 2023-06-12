import { createRootUrl } from '@/lib/utils';
import axios from 'axios';

export const axiosBase = axios.create({
    baseURL: `${createRootUrl()}`,
});
