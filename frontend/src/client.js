import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const id = process.env.REACT_APP_SANITY_PROJECT_ID;
const tok = process.env.REACT_APP_SANITY_PROJECT_TOKEN;

export const client = createClient({
    projectId: 'd4qnjwi7',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,
    token: 'skaqSsmVvbEMt4c6xuqD6bRZbc88pMqXa9DooLqUYIfJuhHFYPirOSqJJqFhY33l2z92GjDIzooX62E1w5gNhK0M2Syno8ReGUdvvZfPQDQZ0OV6LVymC4CCMle5hD1b2lrmm783hgxPJWBT0PbSKsJBDlPQJCBmWskf4OmMryjKDa4T9Lj7',
});

const builder = imageUrlBuilder(client)

export const urlFor = (source)=> builder.image(source)